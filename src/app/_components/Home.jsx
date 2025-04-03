"use client"
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 4); // Add 4 days

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetTime.getTime() - now;

      if (difference <= 0) {
        setTimeRemaining(0);
        clearInterval(interval); // Stop the timer when it reaches 0
      } else {
        setTimeRemaining(difference);
      }
    };

    calculateTimeRemaining(); // Initial calculation
    const interval = setInterval(calculateTimeRemaining, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return (
            <>
            <span class='bg-gray-100 rounded-lg text-black p-2'>{days}d</span> 
            <span class='bg-gray-100 rounded-lg text-black p-2'>{hours}h</span>
            <span class='bg-gray-100 rounded-lg text-black p-2'>{minutes}m</span> 
            <span class='bg-gray-100 rounded-lg text-black p-2'>{seconds}s</span>
            </>
        )

    };


  return (
    <>
    <p className='text-center flex items-center justify-center gap-2 font-bold lg:tracking-[2px] lg:text-[3rem] text-[2rem] lg:mb-10 mb-16'>
        { timeRemaining > 0 ? (
            formatTime(timeRemaining)
        ) : (
            'Timer expired!'
        ) }
    </p>
    </>
  )
}
