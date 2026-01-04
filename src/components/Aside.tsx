import { NavLink } from "react-router";
import DashIcon from "/assets/dashboard-icon.png";
import appointmentIcon from "/assets/appintment-icon.png";
import addDoctorIcon from "/assets/add-doctor.png";
import doctorIcon from "/assets/doctor-icon.png";

function Aside() {
  const asideNav = [
    {
      txt: "Dashboard",
      img: DashIcon,
      navTo: "/dashboard",
      isEnd :true
    },
    {
      txt: "Appointments",
      img: appointmentIcon,
      navTo: "/dashboard/appointment",
      isEnd :false
    },
    {
      txt: "Add Doctor",
      img: addDoctorIcon,
      navTo: "/dashboard/add-doctor",
      isEnd :false
    },
    {
      txt: "Doctors List",
      img: doctorIcon,
      navTo: "/dashboard/doctors",
      isEnd :false
    },
  ];
  return (
    <aside className="py-6 h-full">
      <ul className="links flex flex-col items-start gap-6">
        {asideNav.map((n, idx) => (
          <NavLink
            key={idx}
            to={n.navTo}
            className={"px-4 py-3 w-full flex items-center gap-4 justify-start"}
            end={n.isEnd}
          >
            <img src={n.img} alt="" />
            <p>{n.txt}</p>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
