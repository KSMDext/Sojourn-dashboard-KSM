import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div>
        <input value={filter || ''}  onChange={(e)=> setFilter(e.target.value)} className=" mb-8 h-8 w-96 rounded p-2" placeholder='Search'/>
    </div>
  )
}
