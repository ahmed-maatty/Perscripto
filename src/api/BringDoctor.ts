import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient";

export default async function GetDoctor(id: string) {
  try {
    const doctor = await supaBase.from("Doctors").select("*").eq("id", id);
    return doctor;
  } catch (error) {
    console.log(error);
    toast.error("Error Happend!")
  }
}