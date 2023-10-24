import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button class="rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-indigo-500 text-white cursor-pointer transition duration-250 hover:border-white hover:bg-indigo-400">{props.text}</button>
    </div>
  )
}

export function YellowButton(props) {
    return (
      <div>
          <button class="rounded-lg border border-transparent px-3 py-2 text-base font-semibold bg-yellow-300 cursor-pointer transition duration-250 hover:border-white hover:bg-yellow-200 ml-10 mt-5 text-black">{props.text}</button>
      </div>
    )
  }