import React, { useEffect, useState } from "react";

const DateAndTime = () => {
  return (
    <div className="flex gap-5">
      <DateContainer />
      <TimeContainer />
    </div>
  );
};

const DateContainer = () => {
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = dayArray[date.getDay()];

  return (
    <div className="px-3 py-2 shadow-md">
      <p className="font-semibold font-nunito text-slate-700">{`${today} ${currentDate}/${currentMonth}/${currentYear}`}</p>
    </div>
  );
};

const TimeContainer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const now =
        date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
      setData(now);
    }, [1000]);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-3 py-2 shadow-md">
      <p className="font-semibold font-nunito text-slate-700">{data}</p>
    </div>
  );
};

export default DateAndTime;
