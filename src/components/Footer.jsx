import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-500 h-12 flex items-center justify-center text-smfont-nunito text-white mb-auto fixed bottom-0 w-full'>All @copyright reserved 2023 - {new Date().getFullYear()}</div>
  )
}

export default Footer