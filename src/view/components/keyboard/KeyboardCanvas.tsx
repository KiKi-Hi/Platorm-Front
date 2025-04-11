import React, { useRef, useEffect, useState } from 'react';
import { useKeyboardLoader } from '@service/keyboard/useKeyboardLoader';

const KeyboardCanvas = ({ onReady }: { onReady?: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [ready, setReady] = useState(false);
    const { toggleKeycaps, sceneReady } = useKeyboardLoader(containerRef.current);

    useEffect(() => {
        if (sceneReady) {
            setReady(true);
            onReady?.();
        }
    }, [sceneReady, onReady]);

    return (
        <div ref={containerRef} className="w-full h-full relative">
            {ready && (
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