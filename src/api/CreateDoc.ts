import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient";

interface IDoc {
  username: string;
  email: string;
  password: string;
  speciality: string;
  degree: string;
  experience: string;
  fee: string;
  description: string;
  image: string;
}

export default async function createDoctor(docData: IDoc) {
  try {
    const { error } = await supaBase.from("Doctors").insert(docData);
    if (error) {
      console.log(error);
      return toast.error("Error Happend!");
    }
    return toast.success("Doctor Has Been Created!");
  } catch (error) {
    console.log(error);
  }
}
