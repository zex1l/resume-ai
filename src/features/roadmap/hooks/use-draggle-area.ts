import { useEffect, useRef, useState } from 'react';

const initialTransform = { x: 0, y: 128, scale: 1 };

export const useDraggleArea = () => {
  const [transform, setTransform] = useState(initialTransform);
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = e.target as HTMLElement;

    if (target.closest('[data-block]')) return;

    setIsDragging(true);
    isDraggingRef.current = true;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    positionRef.current = { x: e.clientX, y: e.clientY };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => {
        const deltaX = e.clientX - positionRef.current.x;
        const deltaY = e.clientY - positionRef.current.y;

        setTransform((prev) => ({
          ...prev,
          x: prev.x + deltaX,
          y: prev.y + deltaY,
        }));

        // Обновляем позицию мыши для следующего кадра
        positionRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;

      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  const onScaleUp = () => {
    if (transform.scale > 2) return;
    setTransform((prev) => ({ ...prev, scale: prev.scale + 0.1 }));
  };

  const onScaleDown = () => {
    if (transform.scale < 0.2) return;
    setTransform((prev) => ({ ...prev, scale: prev.scale - 0.1 }));
  };

  const resetOffset = () => setTransform(initialTransform);

  return {
    canvasRef,
    transform,
    onMouseDown,
    resetOffset,
    isDragging,
    onScaleUp,
    onScaleDown,
  };
};
