import React from 'react'

const Header = ({title,category,isChart,type}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{category}</p>
      {isChart?<p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{type}</p>:''}
      {isChart?<p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">{title}</p>:<p className='text-3xl font-extrabold tracking-tight text-slate-950'>{title}</p>}
    </div>
  )
}

export default Header