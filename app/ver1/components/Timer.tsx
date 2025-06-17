'use client';

import { useState, useEffect } from 'react';

interface TimerProps {
  className?: string;
}

export default function Timer({ className = '' }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nextMonday, setNextMonday] = useState("");

  useEffect(() => {
    const calculateTimeAndSpots = () => {
      // Get current time in PDT
      const now = new Date();
      const pdtOffset = -7 * 60; // PDT is UTC-7
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pdtTime = new Date(utc + (pdtOffset * 60000));
      
      // Target: July 3rd, 2025 at 10:00 AM PDT
      const targetDate = new Date('2025-07-03T10:00:00-07:00');
      
      // Calculate time difference
      const timeDiff = targetDate.getTime() - now.getTime();
      
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeAndSpots();
    const interval = setInterval(calculateTimeAndSpots, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`font-black text-base ${className}`}>
      FOUNDER PRICING ENDS JULY 3RD - Save $1,200 in{' '}
      <span className="text-yellow-300">
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
      </span>
      !
    </span>
  );
} 