import React, { useCallback, useState } from 'react'

const SLIDES = [
  {
    src: '/images/valspin-sampling.png',
    label: 'Sample size vs. funds required at various error margins',
  },
  {
    src: '/images/valspin-distribution.png',
    label: 'Distribution of staking returns over simulated trials',
  },
  {
    src: '/images/valspin-insurance.png',
    label: 'Insurance contract flow',
  },
  {
    src: '/images/valspin-swap.png',
    label: 'Swap contract flow',
  },
]

const ValspinCarousel = () => {
  const [index, setIndex] = useState(0)
  const n = SLIDES.length

  const go = useCallback(
    delta => {
      setIndex(i => (i + delta + n) % n)
    },
    [n]
  )

  return (
    <div
      className="work-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Valspin screenshots from README"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          go(-1)
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          go(1)
        }
      }}
    >
      <div className="work-carousel-viewport">
        <div
          className="work-carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className="work-carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${slide.label}`}
              aria-hidden={i !== index}
            >
              <img src={slide.src} alt={slide.label} />
            </div>
          ))}
        </div>
      </div>
      <div className="work-carousel-nav" aria-hidden="false">
        <button type="button" className="work-carousel-arrow" aria-label="Previous screenshot" onClick={() => go(-1)}>
          ‹
        </button>
        <div className="work-carousel-dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Screenshot ${i + 1} of ${n}: ${slide.label}`}
              aria-current={i === index ? 'true' : undefined}
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="work-carousel-arrow" aria-label="Next screenshot" onClick={() => go(1)}>
          ›
        </button>
      </div>
    </div>
  )
}

export default ValspinCarousel
