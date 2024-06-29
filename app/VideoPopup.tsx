// VideoPopup.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

interface VideoPopupProps {
    isOpen: boolean;
    onClose: () => void;
    videoId: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ isOpen, onClose, videoId }) => {
    const [opacity, setOpacity] = useState<number>(0);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setOpacity(1), 10);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[rgba(44,44,44,0.95)] flex justify-center items-center z-50 p-4">
            <div
                className="bg-white relative rounded-[12px] transition-opacity duration-300 flex justify-center items-center w-full h-full max-w-[1304px] max-h-[744px] sm:w-[90%] sm:h-[90%] md:w-[80%] md:h-[80%]"
                style={{
                    padding: '12px',
                    opacity: opacity
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-0 -right-0 w-8 h-8 flex items-center justify-center z-10"
                    style={{
                        transform: 'translate(50%, -50%)'
                    }}
                >
                    <Image src="/close-button.svg" alt="Close button" width={34} height={34} />
                </button>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;