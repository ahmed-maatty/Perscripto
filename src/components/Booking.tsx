import { useState } from "react";
import createAppointment from "../api/CreateAppointment";
import { toast } from "react-toastify";

interface DatesInterface {
  day: string;
  date: string;
  time: string;
}

interface IProps {
  docname: string;
  username: string;
}

function Booking({ docname, username }: IProps) {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const dates: Array<DatesInterface> = [
    { day: "MON", date: "10", time: "8.00am" },
    { day: "TUE", date: "11", time: "8.30am" },
    { day: "WED", date: "12", time: "9.00am" },
    { day: "THU", date: "13", time: "9.30am" },
    { day: "FRI", date: "14", time: "10.00am" },
    { day: "SAT", date: "15", time: "10.30am" },
    { day: "SUN", date: "16", time: "11.00am" },
  ];

  const appointmentHandler = async () => {
    if (!day || !time) {
      return toast.error("Please, Enter Both Day & Time");
    }
    await createAppointment({ day, time, docname, username });
  };

  const handleBtnTimeActive = (e: HTMLButtonElement) => {
    document
      .querySelectorAll(".time_btn")
      .forEach((btn) => btn.classList.remove("active"));
    e.classList.add("active");
  };

  const handleBtnDayActive = (e: HTMLButtonElement) => {
    document
      .querySelectorAll(".day_btn")
      .forEach((btn) => btn.classList.remove("active"));
    e.classList.add("active");
  };
  return (
    <section className="Booking_Section_Content">
      <div className="day_date flex items-center justify-center gap-7">
        {dates.map((date, idx) => (
          <button
            className="container cursor-pointer day_btn"
            key={idx}
            onClick={(e) => {
              handleBtnDayActive(e.currentTarget);
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
            className="container py-1 px-4 cursor-pointer time_btn"
            key={idx}
            onClick={(e) => {
              handleBtnTimeActive(e.currentTarget);
              setTime(`${date.time}`);
            }}
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
