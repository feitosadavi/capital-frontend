import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import * as S from './DotCarousel.styles'
import { Photo } from '../../types'
import Image from 'next/image'

interface DotCarouselProps {
  photos?: Photo[]
  slides?: any[]
}


const arrowsHandler = (slider: any) => {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false
  function clearNextTimeout () {
    clearTimeout(timeout)
  }
  function nextTimeout () {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 3000)
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

export const DotCarousel: React.FC<DotCarouselProps> = ({ photos, slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged (slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setLoaded(true)
    },
  }, [arrowsHandler])

  const listImgs = () =>
    photos?.map(({ src, alt }) =>
      <div key={src} className='keen-slider__slide number-slide'>
        <Image src={src} alt={alt} layout='fill' />
      </div>
    )

  const listSlides = () =>
    slides?.map((slide, i) =>
      <div key={i} className='keen-slider__slide number-slide'>
        {slide}
      </div>
    )

  const listContent = () => photos ? listImgs() : listSlides()

  return (<div style={{ width: '100%' }}>
    <S.Container>
      <div ref={sliderRef} className="keen-slider slides-container">
        {listContent()}
      </div>

      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </S.Container>

    {loaded && instanceRef.current && (
      <S.Dots>
        {[
          ...Array(instanceRef.current.track.details.slides.length).keys(),
        ].map((idx) => {
          return (
            <S.Dot
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              active={currentSlide === idx}
            ></S.Dot>
          )
        })}
      </S.Dots>
    )}
  </div>)
}

function Arrow (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {

  return (
    <S.Arrow
      onClick={props.onClick}
      left={props.left}
      disabled={props.disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left
        ? <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        : <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      }

    </S.Arrow>
  )
}
