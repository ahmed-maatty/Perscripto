import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient"


export default async function GetAppointmentLogic() {
  try {
    const { data, error } = await supaBase.from("Appointments").select("*");
    if (error) {
      console.log(error.message);
      return toast.error("Error Happend.")
    }
    return data;
  } catch (error) {
    console.log(error)
  }
}