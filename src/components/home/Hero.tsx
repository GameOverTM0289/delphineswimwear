'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    title: 'Rhythm of a',
    titleAccent: 'Free Spirit',
    subtitle: 'Mediterranean-inspired swimwear for the modern goddess',
    cta: 'Explore Collection',
    link: '/collections/summer-2025',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80',
    title: 'Born in the',
    titleAccent: 'Mediterranean',
    subtitle: 'Where elegance meets the endless blue',
    cta: 'Shop Now',
    link: '/shop',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1920&q=80',
    title: 'Embrace',
    titleAccent: 'Freedom',
    subtitle: 'Designed for those who carry the spirit of the sea',
    cta: 'Discover More',
    link: '/about',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container-custom text-center text-white">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isLoaded && index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Tagline */}
                <p className="tagline text-white/70 mb-6">{slide.subtitle}</p>

                {/* Title */}
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-2">
                  {slide.title}
                </h1>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium italic text-delphine-yellow mb-10">
                  {slide.titleAccent}
                </h1>

                {/* CTA */}
                <Link href={slide.link} className="btn-white">
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-8 z-20 hidden md:block">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs tracking-widest uppercase mb-3 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-white animate-[scroll_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  )
}
