import { toast } from "react-toastify";
import supaBase from "../config/supaBaseClient";

interface UserData {
  email: string;
  password: string;
}

export default async function LoginLogic(userData: UserData) {
  try {
    const { data, error } = await supaBase.from("Users").select("*").eq("email" , userData.email).single()
    if (error) {
      toast.error("User Not Found!");
      return null;
    }
    if (!data){
      toast.error("User Not Found");
    }
    const {username , email , password , role , id} = data;
    if(password !== userData.password) {
      return toast.error(`Invalid Email Or Password`);
    }
    //Set User In Redux State
    return console.log({username , email , password , role , id});
  } catch (error) {
    console.log(error);
  }
}
