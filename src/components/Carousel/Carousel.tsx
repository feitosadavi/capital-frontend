import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import * as S from './styles'
import { Photo } from '../../types'
import Image from 'next/image'

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
  photos: Photo[]
}

export const Carousel: React.FC<CarouselProps> = ({ photos }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  const listImgs = () =>
    photos.map(({ src, alt }) =>
      <div key={src} className='keen-slider__slide number-slide'>
        <Image src={src} alt={alt} layout='fill' />
      </div>
    )

  return (
    <S.Container>
      <div ref={sliderRef} className="keen-slider slides-container">
        {listImgs()}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {listImgs()}
      </div>
    </S.Container>
  )
}
