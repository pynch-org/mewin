import { useState } from 'react'
import './ImageGallery.css'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) {
    return <div className="no-images">No hay imágenes disponibles</div>
  }

  return (
    <div className="image-gallery">
      <div className="gallery-main">
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="gallery-image"
        />

        {images.length > 1 && (
          <>
            <button
              className="gallery-nav gallery-nav-prev"
              onClick={goToPrevious}
              aria-label="Imagen anterior"
            >
              &#8249;
            </button>
            <button
              className="gallery-nav gallery-nav-next"
              onClick={goToNext}
              aria-label="Siguiente imagen"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentIndex ? 'thumbnail-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <img src={image} alt={`${alt} thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
