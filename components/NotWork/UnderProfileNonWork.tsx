'use client'

import React from 'react'

type Props = {}

export default function UnderProfileNonWork({}: Props) {
  function calculateAge(birthYear: number) {
    const currentYear = new Date().getFullYear()
    return currentYear - birthYear
  }

  return (
    <div className="px-2 flex flex-col gap-1 mt-5 max-w-[700px]">
      <h1 className="font-bold text-xl">MY OPINION</h1>
      <h1 className="font-medium text-lg text-white/70">
        I hate big corporations. They act like they are your only option and
        then pay you crumbs. I would rather work on my own stuff than take some
        ass money for nothing.
        <br />
        Startups are different. Real energy, real chaos and real creativity.
        That is what I enjoy.{' '}
        <span className="font-black opacity-100 text-white">
          To all startups, I hope you succeed. If you ever need a dev, I am
          here.
        </span>
      </h1>

      <div className="flex flex-col gap-1 mt-5">
        <h1 className="font-bold text-xl">WHAT IS THIS</h1>
        <ul className="list-disc px-4">
          <li>
            This is not just a portfolio. This is my website. I write what I
            want. If you are a snowflake, close the page.
          </li>
          {/* <li>
            I hate those first calls where some random dude asks pointless deep
            questions they never use later. Give people a trial week and keep it
            simple.
          </li> */}
        </ul>
      </div>
    </div>
  )
}
