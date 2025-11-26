'use client'

import React from 'react'

type Props = {}

export default function UnderProfileNonWork({}: Props) {
  function calculateAge(birthYear: number) {
    const currentYear = new Date().getFullYear()
    return currentYear - birthYear
  }

  return (
    <div className="px-2 flex flex-col gap-3 mt-10 max-w-[700px]">
      <h1 className="font-bold text-xl">NON-WORK SIDE</h1>
      <h1 className="font-medium text-lg text-white/70">
        Bruh, they think I’m gonna be their regular colleague. I am going 24/7
        and am still better then <span className="font-black">YOU</span>. Have
        tried everything and had a few bad businesses, but still trying and
        learning from my mistakes. So if you want somebody who’s gonna listen to
        your orders and suck your lollipop for some smack, you’re on the wrong
        site cuz i have some money and I beg you to click on this:{' '}
        <a
          href="https://www.linkedin.com/jobs/"
          className="text-blue-400 cursor-pointer"
        >
          Linkedin Jobs
        </a>
      </h1>
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="font-bold text-xl">COMPANY AND STILL READING?</h1>
        <ul className="list-disc px-4">
          <li>This side of site is not friends book or badoo for companies</li>
          <li>We are not friends</li>
          <li>Don’t offer me a job without money included in message</li>
          <li>If your offer is good, my result is better </li>
          <li>Is this arrogant to you? Then I guess I am not right for you</li>
        </ul>
      </div>
    </div>
  )
}
