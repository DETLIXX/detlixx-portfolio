import Link from 'next/link'
import React, {useState} from 'react'
import {Slider} from '@heroui/slider'
import { useAptabase } from '@aptabase/react'

type Props = {}

const STATES: Record<number, {text: string; img: string}> = {
  0: {text: 'You just dont want :(', img: '/images/huh.png'},
  25: {text: 'Really? thats it?', img: '/images/no.png'},
  50: {text: 'You can do better', img: '/images/cry.png'},
  75: {text: 'Almost, but still bad', img: '/images/noway.png'},
  100: {text: 'Okay... here', img: '/images/catto.png'},
}

export default function PDFCVCard({}: Props) {
  const [value, setValue] = useState<number>(0)
  const {trackEvent} = useAptabase()

  const getState = () => {
    const percent = Math.round(value * 100)
    const nearest = Math.floor(percent / 25) * 25
    return STATES[nearest]
  }

  const isUnlocked = value === 1
  const state = getState()

  return (
    <div className="mt-5 flex flex-col gap-2">
      <Slider
        className="max-w-md"
        defaultValue={0}
        label="How much do you wanna see my CV ?"
        maxValue={1}
        minValue={0}
        step={0.01}
        value={value}
        onChange={setValue}
        onDragEnd={(finalValue: number) => {
          const percent = Math.round(finalValue * 100)
          const nearest = Math.floor(percent / 25) * 25
          trackEvent('slider_change', {sliderName: 'cvSlider', value: nearest})
        }}
      />

      <a
        href={isUnlocked ? '/pdf/CV_EN.pdf' : undefined}
        target="_blank"
        className={`flex items-center gap-2 text-lg font-medium transition-all self-start ${
          isUnlocked
            ? 'hover:text-white text-blue-400 cursor-pointer'
            : 'text-white/40 cursor-not-allowed'
        }`}
        onClick={(e) => {
          if (!isUnlocked) e.preventDefault()
          if (isUnlocked) trackEvent('cv_download', {file: 'CV_EN.pdf'})
        }}
      >
        <img src={state.img} alt={state.text} className="w-20 h-20" />
        {state.text}
      </a>
    </div>
  )
}
