import React, { useRef, useEffect, useState } from 'react';
import { useKeyboardLoader } from '@service/feature/keyboard/useKeyboardLoader';

const KeyboardCanvas = ({ onReady }: { onReady?: () => void }) => {
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
        <div ref={containerRef} className="w-full h-full relative">
            {sceneReady && (
                <button
                    onClick={toggleKeycaps}
                    className="absolute top-4 left-4 z-10 px-4 py-2 bg-black text-white text-sm rounded"
                >
                    키캡 토글
                </button>
            )}
        </div>
    );
};

export default KeyboardCanvas;