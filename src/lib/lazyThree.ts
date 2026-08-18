import type * as THREE from "three";

export interface ThreeSceneHandle {
  renderer: THREE.WebGLRenderer;
  /** Called every animation frame while the scene is mounted, elapsed seconds since mount. */
  onFrame?: (elapsed: number) => void;
  /** Called on container resize with the new pixel size. */
  onResize?: (width: number, height: number) => void;
  dispose: () => void;
}

/**
 * Mounts a Three.js scene into `container` only while it's scrolled into view,
 * and fully tears it down (canvas, renderer, GSAP ScrollTriggers the caller
 * registered) the moment it scrolls out — so at most one WebGL context per
 * lazy-mounted section exists at a time.
 */
export function mountLazyThree(
  container: HTMLElement,
  create: (canvas: HTMLCanvasElement) => Promise<ThreeSceneHandle> | ThreeSceneHandle,
): () => void {
  let handle: ThreeSceneHandle | null = null;
  let canvas: HTMLCanvasElement | null = null;
  let rafId = 0;
  let resizeObserver: ResizeObserver | null = null;
  let starting = false;

  const start = async () => {
    if (handle || starting) return;
    starting = true;
    canvas = document.createElement("canvas");
    canvas.className = "absolute inset-0 size-full";
    container.appendChild(canvas);

    const created = await create(canvas);
    starting = false;
    handle = created;

    resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      handle?.onResize?.(width, height);
    });
    resizeObserver.observe(container);

    const startTime = performance.now();
    const loop = () => {
      handle?.onFrame?.((performance.now() - startTime) / 1000);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
  };

  const stop = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    resizeObserver?.disconnect();
    resizeObserver = null;
    handle?.dispose();
    handle = null;
    canvas?.remove();
    canvas = null;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) start();
        else stop();
      });
    },
    { rootMargin: "200px", threshold: 0.05 },
  );
  observer.observe(container);

  return () => {
    observer.disconnect();
    stop();
  };
}
