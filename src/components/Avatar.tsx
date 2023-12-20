
import React from 'react';

interface AvatarProps {
  avatarInfo: {
    imageUrl: string;
    altText: string;
    className: string;
    imageSize?: string;
    imageStyles?: React.CSSProperties; 
  };
}

const Avatar: React.FC<AvatarProps> = ({ avatarInfo }) => {
  const { imageUrl, altText, className, imageSize, imageStyles } = avatarInfo;

  return (
    <img
      className={className}
      src={imageUrl}
      alt={altText}
      style={{
        width: imageSize,
        height: imageSize,
        ...imageStyles, // Aplica estilos personalizados
      }}
    />
  );
};

export default Avatar;
