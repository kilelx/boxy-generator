import React from 'react'
import { useSelector } from 'react-redux'
import getShadowBoxValue from '../../../utils/getBoxShadowValue'
import { useEffect } from 'react'

export default function ModalResult({closeModal}) {
  const shadowValues = useSelector(state => state.shadows)

  useEffect(() => {
    document.body.style.overflowY = "hidden"

    // Keynote function: when the component is destroyed, we set it back to normal
    return () => document.body.style.overflowY = "auto"

    // Array dependency is empty, we execute it just once when it enters into the DOM
  }, [])

  // Utilitary function to avoid spam on the click
  let runningAnimation = false

  function handleCopy(e) {
    if(!runningAnimation) {
      console.log(e.target);
      runningAnimation = true;
      navigator.clipboard.writeText(`box-shadow: ${getShadowBoxValue(shadowValues)}`)
      e.target.textContent = "Copied! ✔"
      e.target.classList.add("bg-green-600")
      e.target.classList.remove("bg-blue-600", "hover:bg-blue-700")

      setTimeout(() => {
        e.target.textContent = "Copy"
        e.target.classList.remove("bg-green-600")
        e.target.classList.add("bg-blue-600", "hover:bg-blue-700")
        runningAnimation = false;
      }, 1250)
    }
  }

  return (
    <div
    onClick={closeModal}
    className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75'>
      <div
      onClick={e => e.stopPropagation()}
      className='max-w-[400px] rounded p-7 bg-gray-50'
      >
        <div className="flex items-end mb-5">
          <p className='font-semibold mr-5'>Here is your code 🎉</p>
          <button
          className='ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded transition'
          onClick={(e) => handleCopy(e)}
          >Copy</button>
          <button
          onClick={closeModal}
          className='text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded transition'>Close</button>
        </div>
        <p className='bg-gray-800 rounded px-2 py-2'>
          <span className='text-orange-500 font-semibold'>box-shadow: </span>
          <span className='text-white'>{getShadowBoxValue(shadowValues)}</span>
        </p>
      </div>
    </div>
  )
}
