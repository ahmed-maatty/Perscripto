import supaBase from "../config/supaBaseClient";
import { toast } from "react-toastify";

interface UserData {
  username: string;
  email: string;
  password: string;
  role: string;
}

export default async function CreateUser(userData: UserData) {
  try {
    const { error } = await supaBase.from("Users").insert(userData);
    if (error) {
      console.log(error.message);
      return toast.error("Error Happend!");
    }
    return toast.success("User Created");
  } catch (error) {
    console.log(error);
  }
}
