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
      return {};
    }
    if (!data){
      toast.error("User Not Found");
    }
    const { username , id , email , role , password } = data;
    if(password !== userData.password) {
      toast.error(`Invalid Email Or Password`);
      return {}
    }
    //Set User In Redux State
    
    return {username , id , email , role};
  } catch (error) {
    console.log(error);
  }
}
