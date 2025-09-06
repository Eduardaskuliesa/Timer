"use client";
import React, { useState } from "react";

function SingleDigit({ digit }) {
  return (
    <div className="text-gray-100 bg-gray-900 p-4 rounded-lg text-8xl font-bold font-family-times  flex items-center justify-center">
      {digit}
    </div>
  );
}

function TimerDigitGroup({ value, label }) {
  const tens = Math.floor(value / 10);
  const ones = value % 10;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <SingleDigit digit={tens} />
        <SingleDigit digit={ones} />
      </div>
      <p className="text-lg mt-2">{label}</p>
    </div>
  );
}

const TimerPage = ({
  initialSeconds = 1,
  initialMinutes = 25,
  initialHours = 1,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [hours, setHours] = useState(initialHours);

  const hideHours = hours === 0;
  const hideSeconds = hours !== 0;

  return (
    <div className="flex h-[60vh] justify-center items-center">
      <div className="flex flex-row gap-2 items-center">
        {!hideHours && (
          <>
            <TimerDigitGroup value={hours} label="Hours" />
            <div className="text-6xl font-bold mb-10">:</div>
          </>
        )}

        <TimerDigitGroup value={minutes} label="Minutes" />

        {!hideSeconds && (
          <>
            <div className="text-6xl font-bold mb-15">:</div>
            <TimerDigitGroup value={seconds} label="Seconds" />
          </>
        )}
      </div>
    </div>
  );
};

export default TimerPage;
