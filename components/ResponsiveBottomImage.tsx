// ResponsiveBottomImage.tsx
import React from 'react';
import Image from 'next/image';

interface ResponsiveBottomImageProps {
    src: string;
    alt: string;
}

const ResponsiveBottomImage: React.FC<ResponsiveBottomImageProps> = ({ src, alt }) => {
    return (
        <div className="w-full max-w-[1320px] mx-auto relative" style={{ paddingTop: '25.76%' }}> {/* 340 / 1320 = 0.2576 */}
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
};

export default ResponsiveBottomImage;