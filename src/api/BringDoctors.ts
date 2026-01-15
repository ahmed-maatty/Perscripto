import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient";
import type { Doctor } from "../store/doctorSlice";

export default async function BringDoctors(): Promise<Doctor[]> {
  try {
    const { data, error } = await supaBase.from("Doctors").select("*");
    if (error) {
      console.log(error.message);
      toast.error("Error Happened!");
      return [];
    }
    return data || [];
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong!");
    return [];
  }
}
