import React from 'react'

const Card = () => {
  return (
    <div className='w-[350px] h-[500px] gap-3 leading-8 rounded-lg border-[2px] border-[#FF1C1C] border-solid m-5 p-5'>
        <h2 className='font-bold text-3xl'>Free</h2>
        <h1 className='font-bold text-5xl text-[#FF4040] my-4'>$ 0</h1>
        <h3 className='font-semibold'>Capture ideas and find them quickly</h3>
        <p>Sync unlimited devices</p>
        <p>10 GB monthly uploads</p>
        <p>200 MB max note size</p>
        <p>Customize Home dashboard and access extra</p>
        <p>Connect primary Google Calendar account</p>
        <p>Add due dates, reminders, and notifications to your tasks</p>
        <button className='bg-[#FF4040] text-white rounded p-1 px-5'>Get Started</button>
    </div>
  )
}

export default Card