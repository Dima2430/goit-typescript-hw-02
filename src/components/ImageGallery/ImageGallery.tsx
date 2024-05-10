import React from "react";
import ImageCard from "../ImageCard/ImageCard";

interface Image {
  id: string;
  urls: {
    full: string;
  };
  description: string;
}

interface ImageGalleryProps {
  images: Image[];
  modalIsOpen: boolean;
  openModal: (image: Image) => void;
  closeModal: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  modalIsOpen,
  openModal,
  closeModal,
}) => {
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        gap: "15px",
        paddingTop: "50px",
      }}
    >
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
