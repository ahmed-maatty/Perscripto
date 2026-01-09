import { useState } from "react";

interface DatesInterface {
  day: string;
  date: string;
  time: string;
}

function Booking() {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  console.log(day, time);
  const dates: Array<DatesInterface> = [
    { day: "MON", date: "10", time: "8.00am" },
    { day: "TUE", date: "11", time: "8.30am" },
    { day: "WED", date: "12", time: "9.00am" },
    { day: "THU", date: "13", time: "9.30am" },
    { day: "FRI", date: "14", time: "10.00am" },
    { day: "SAT", date: "15", time: "10.30am" },
    { day: "SUN", date: "16", time: "11.00am" },
  ];
  const appointmentHandler = () => {
    console.log(`You Booked In ${day} at ${time} oclock`);
  };
  return (
    <section className="Booking_Section_Content">
      <div className="day_date flex items-center justify-center gap-7">
        {dates.map((date, idx) => (
          <button
            className="container cursor-pointer"
            key={idx}
            onClick={() => {
              setDay(`${date.day} ${date.date}`);
            }}
          >
            <h4 className="text-center">{date.day}</h4>
            <h4 className="text-center">{date.date}</h4>
          </button>
        ))}
      </div>
      <div className="time flex items-center justify-center gap-7 mt-6">
        {dates.map((date, idx) => (
          <button
            className="container py-1 px-4 cursor-pointer"
            key={idx}
            onClick={() => setTime(`${date.time}`)}
          >
            <h4>{date.time}</h4>
          </button>
        ))}
      </div>
      <button
        className="Booking_Btn text-xl py-3 px-5 mt-7 cursor-pointer mx-auto block"
        onClick={appointmentHandler}
      >
        Book an appointment
      </button>
    </section>
  );
}

export default Booking;
