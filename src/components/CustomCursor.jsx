import { useEffect } from "react";

export const CustomCursor = () => {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return undefined;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = pointerX;
    let ringY = pointerY;
    let frameId = 0;
    let pointerActive = false;

    const renderCursor = () => {
      frameId = 0;
      ringX += (pointerX - ringX) * 0.22;
      ringY += (pointerY - ringY) * 0.22;

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(pointerX - ringX) > 0.5 || Math.abs(pointerY - ringY) > 0.5) {
        frameId = window.requestAnimationFrame(renderCursor);
      }
    };

    const scheduleRender = () => {
      if (!frameId) frameId = window.requestAnimationFrame(renderCursor);
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!pointerActive) {
        pointerActive = true;
        document.body.classList.add("custom-cursor-enabled");
        dot.classList.add("is-visible");
        ring.classList.add("is-visible");
      }
      scheduleRender();
    };

    const getInteractiveTarget = (target) =>
      target instanceof Element ? target.closest("a, button, [data-cursor]") : null;

    const handlePointerOver = (event) => {
      const target = getInteractiveTarget(event.target);
      if (!target) return;

      ring.classList.add("is-active");
      ring.dataset.label = target.getAttribute("data-cursor") || "";
    };

    const handlePointerOut = (event) => {
      const previous = getInteractiveTarget(event.target);
      const next = getInteractiveTarget(event.relatedTarget);
      if (previous === next) return;
      if (!next) {
        ring.classList.remove("is-active");
        ring.dataset.label = "";
      }
    };

    const handlePointerLeave = () => {
      pointerActive = false;
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible", "is-active");
      ring.dataset.label = "";
      document.body.classList.remove("custom-cursor-enabled");
    };

    const handlePointerOutOfWindow = (event) => {
      if (!event.relatedTarget) handlePointerLeave();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOutOfWindow);
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOutOfWindow);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      if (frameId) window.cancelAnimationFrame(frameId);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span className="cursor-dot" />
      <span className="cursor-ring" />
    </div>
  );
};
