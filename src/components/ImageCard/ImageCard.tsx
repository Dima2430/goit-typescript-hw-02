import React from "react";
interface Image {
  urls: {
    small: string;
  };
  description: string;
}

interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.description}
        onClick={() => openModal(image)}
        style={{ width: "20vw", height: "35vh" }}
      />
    </div>
  );
};

export default ImageCard;
