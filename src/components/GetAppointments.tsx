import { useEffect } from "react";
import GetAppointmentLogic from "../api/GetAllAppointments";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { setAppointment } from "../store/appointmentSlice";
import delIcon from "/assets/deleteIcon.png";
import deleteAppointmentsLogic from "../api/DeleteAppointment";
import { toast } from "react-toastify";

function GetAppointments() {
  const dispatch = useDispatch<AppDispatch>();
  const { appointments } = useSelector(
    (state: RootState) => state.Appointments
  );
  const fetchData = async () => {
    const data = await GetAppointmentLogic();
    dispatch(setAppointment(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const isDeleted: boolean = await deleteAppointmentsLogic(id);
    if (isDeleted) {
      toast.success("Appointment Is Deleted");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      toast.error("Error Happend !");
    }
  };

  if (!appointments || appointments.length === 0) {
    return (
      <h1 className="font-semibold text-xl">There Is Not Appointments Yet</h1>
    );
  }

  return (
    <div className="w-full appointment_taple_container">
      <div className="w-full taple_content py-2 flex items-center justify-between">
        <div className="flex-1 py-3 px-5">#</div>
        <div className="flex-2 text-center p-3">Patient</div>
        <div className="flex-3 text-center p-3">Date & Time</div>
        <div className="flex-2 text-center p-3">Doctor</div>
        <div className="flex-1 text-center p-3"></div>
      </div>
      {appointments.map((item) => (
        <div
          className="w-full taple_content py-2 flex items-center justify-between"
          key={item.id}
        >
          <div className="flex-1 p-3 px-5">{item.id}</div>
          <div className="flex-2 text-center p-3 ">{item.patient_name}</div>
          <div className="flex-3 text-center p-3">{item.time}</div>
          <div className="flex-2 text-center p-3">{item.doctor_name}</div>
          <button
            className="flex-1 text-center p-3 deleteBtn cursor-pointer"
            onClick={() => handleDelete(item.id)}
          >
            {" "}
            <img src={delIcon} alt="" />{" "}
          </button>
        </div>
      ))}
    </div>
  );
}

export default GetAppointments;
