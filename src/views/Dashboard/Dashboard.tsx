import React from "react";
import patientIcon from "/assets/patients_icon.svg";
import appointmentIcon from "/assets/appointments_icon.svg";
import doctorIcon from "/assets/doctor_icon.svg";
import GetAppointments from "../../components/GetAppointments";

function Dashboard() {
  const details = [
    {
      icon: patientIcon,
      num: "14",
      txt: "Doctors",
    },
    {
      icon: appointmentIcon,
      num: "2",
      txt: "Appointments",
    },
    {
      icon: doctorIcon,
      num: "5",
      txt: "Patients",
    },
  ];
  return (
    <section className="w-full h-full dashboard-page flex flex-col gap-6 p-6">
      <div className="system_details flex items-center gap-6">
        {details.map((obj, idx) => (
          <div className="obj_detail flex gap-3 p-4" key={idx}>
            <div className="img-container">
              <img src={obj.icon} alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-xl">{obj.num}</h4>
              <p>{obj.txt}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <GetAppointments />
      </div>
    </section>
  );
}

export default Dashboard;
