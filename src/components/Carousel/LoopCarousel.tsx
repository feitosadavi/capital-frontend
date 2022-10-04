import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface LoopCarouselProps {
  cards: any[]
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

export const LoopCarousel: React.FC<LoopCarouselProps> = ({ cards }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1 },
      },
      "(min-width: 590px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3 },
      },
    },
    slides: { perView: 1 },
    loop: true,
    mode: "free",
  }, [(slider) => autoplay(slider, 2000)])
  return (
    <div ref={ref} className="keen-slider">
      {cards.map((card, i) => (
        <div key={i} className="keen-slider__slide">
          {card}
        </div>
      ))}
    </div>
  )
}