'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({
  data,
}: {
  data: {
    image: string
  }[]
}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Function to update carousel width
  const updateCarouselSize = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth
      setCarouselWidth(width)
    }
  }
  
  // Effect to update carousel size on initial render and window resize
  useEffect(() => {
    updateCarouselSize() // Initial size update

    window.addEventListener('resize', updateCarouselSize)
    return () => {
      window.removeEventListener('resize', updateCarouselSize)
    }
  }, [])

  const handlePrevious = () => {
    setCurrentImg((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentImg((prev) => Math.min(prev + 1, data.length - 1))
  }

  return (
    <div>
      {/* Carousel container */}
      <div
        className="aspect-video relative w-40 sm:w-[200px] md:w-[720px] lg:w-[1000px] xl:w-[1300px] overflow-clip rounded-md"
        ref={carouselRef}
      >
        {/* Image container */}
        <div
          style={{
            transform: `translateX(-${currentImg * carouselWidth}px)`, // Use translateX for smoother transitions
          }}
          className="absolute flex h-full transition-transform duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full flex-shrink-0" style={{ width: carouselWidth }}>
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || 'https://random.imagecdn.app/500/500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-3 flex justify-center">
        <button
          disabled={currentImg === 0}
          onClick={handlePrevious}
          className={`border border-minty text-minty px-4 py-2 font-bold ${currentImg === 0 ? 'opacity-50' : ''}`}
        >
          {'<'}
        </button>
        <button
          disabled={currentImg === data.length - 1}
          onClick={handleNext}
          className={`border border-minty text-minty px-4 py-2 font-bold ${currentImg === data.length - 1 ? 'opacity-50' : ''}`}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Carousel