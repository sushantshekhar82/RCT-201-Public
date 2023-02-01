import React from 'react'
import { useState } from 'react'

const useToggle = (initalvalue) => {
    const [value,setValue]=useState(initalvalue)

    const ToggleFunction=()=>{
        setValue(!value)
    }
  return (
   [value,ToggleFunction]
  )
}

export default useToggle
