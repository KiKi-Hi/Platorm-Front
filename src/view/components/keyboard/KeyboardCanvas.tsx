import React, { useRef, useEffect, useState } from 'react';
import { useKeyboardLoader } from '@service/feature/keyboard/useKeyboardLoader';

function KeyboardCanvas({ onReady }: { onReady?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [toggleKeycaps, setToggleKeycaps] = useState<() => void>(() => () => {});
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const { toggleKeycaps, sceneReady } = useKeyboardLoader(containerRef.current);
    setToggleKeycaps(() => toggleKeycaps);
    setSceneReady(sceneReady);
    onReady?.();
  }, [onReady]);

  return (
    <div ref={containerRef} className="relative size-full">
      {sceneReady && (
        <button
          onClick={toggleKeycaps}
          className="absolute left-4 top-4 z-10 rounded bg-black px-4 py-2 text-sm text-white"
        >
          키캡 토글
        </button>
      )}
    </div>
  );
}

export default KeyboardCanvas;
