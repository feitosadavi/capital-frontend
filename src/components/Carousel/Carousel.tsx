import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import * as S from './styles'
import { Photo } from '../../types'
import Image from 'next/future/image'
import { useMediaQuery } from '@mui/material'

function ThumbnailPlugin (mainRef: any) {
  return (slider: any) => {
    function removeActive () {
      slider.slides.forEach((slide: any) => {
        slide.classList.remove("active")
      })
    }
    function addActive (idx: any) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents () {
      slider.slides.forEach((slide: any, idx: any) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main: any) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}

interface CarouselProps {
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

const autoplay = (slider: any, interval: number) => {
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
    }, interval)
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

export const Carousel: React.FC<CarouselProps> = ({ photos, slides }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged (slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setLoaded(true)
    },
  }, [(slider) => autoplay(slider, 4000)])

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef), arrowsHandler]
  )

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)

  const isMobile = useMediaQuery('(max-width: 500px)')

  const listImgs = (width?: string) =>
    photos?.map(({ src, alt }) =>
      <div key={src} className='keen-slider__slide number-slide'>
        <Image src={src} alt={alt}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: width ?? 'auto', height: '100%', borderRadius: '.5rem' }} />
      </div>
    )

  const listSlides = () =>
    slides?.map((slide, i) =>
      <div key={i} className='keen-slider__slide number-slide'>
        {slide}
      </div>
    )

  const listContent = (width?: string) => photos ? listImgs(width) : listSlides()

  return (
    <S.Container>
      <div ref={sliderRef} className="keen-slider slides-container">
        {listContent()}
        {loaded && instanceRef.current && (
        <S.ArrowContainer>
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
        </S.ArrowContainer>
      )}
      </div>


      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {listContent(isMobile ? '100%' : 'auto')}
      </div>

    </S.Container>
  )
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