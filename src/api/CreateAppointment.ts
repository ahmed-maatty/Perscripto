import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient";

interface IParam {
  day: string;
  time: string;
  docname: string;
  username: string;
}

export default async function createAppointment({ day, time, docname, username }: IParam) {
  try {
    const { error } = await supaBase.from("Appointments").insert({ day, time, doctor_name: docname, patient_name: username });
    if(error) {
      console.log(error)
      return toast.error("Error Happend!");
    }
    return toast.success(`The Doctor Waiting For You  in ${day} at ${time}`);
  } catch (error) {
    console.log(error)
  }
}