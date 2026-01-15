import GetAppointments from "../../components/GetAppointments";

function Appointments() {
  return (
    <div className="p-8 appointment_section w-full h-full">
      <h1 className=" font-semibold text-xl mb-5">All Appointments</h1>
      <GetAppointments />
    </div>
  );
}

export default Appointments;
