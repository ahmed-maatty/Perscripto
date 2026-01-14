import supaBase from "../config/supaBaseClient"


export default async function deleteAppointmentsLogic(id: string) {
  try {
    const { error } = await supaBase.from("Appointments").delete().eq("id", id)
    if (error) {
      console.log(error)
      return false
    }
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}