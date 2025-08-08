import { useEffect, useRef, useState } from 'react';

const initialOffset = { x: 0, y: 16 };

export const useDraggleArea = () => {
  const [offset, setOffset] = useState(initialOffset);
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

        setOffset((prev) => ({
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

  const resetOffset = () => setOffset(initialOffset);

  return { canvasRef, offset, onMouseDown, resetOffset, isDragging };
};
