import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient";

interface UserData {
  email: string;
  password: string;
}

export default async function LoginLogic(userData: UserData) {
  try {
    let { data, error } = await supaBase
      .from("Users")
      .select("*")
      .eq("email", userData.email)
      .single();

    if (!data) {
      const doctorUser = await supaBase
        .from("Doctors")
        .select("*")
        .eq("email", userData.email)
        .single();
      data = doctorUser.data;
      error = doctorUser.error;
    }

    if (error) {
      toast.error("User Not Found!");
      return null;
    }
    if (!data) {
      toast.error("User Not Found");
      return null;
    }
    const { username, id, email, role, password } = data;
    if (password !== userData.password) {
      toast.error(`Invalid Email Or Password`);;
      return null;
    }
    //Set User In Redux State
    toast.success(`"Welcome, MR.${data.username}`);
    return { username, id, email, role };
  } catch (error) {
    console.log(error);
  }
}