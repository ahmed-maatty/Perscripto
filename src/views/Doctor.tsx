import { useEffect } from "react";
import { useParams } from "react-router";
import GetDoctor from "../api/BringDoctor";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { setDoctor } from "../store/doctorSlice";
import Booking from "../components/Booking";

function Doctor() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { doctor } = useSelector((state: RootState) => state.Doctor);
  const fetchDoctor = async () => {
    if (!id) return;
    const { data } = await GetDoctor(id);
    dispatch(setDoctor(data));
  };
  useEffect(() => {
    fetchDoctor();
  }, []);

  if (!doctor) return <h1>Loading....</h1>;

  return (
    <section className="Doctor_Section">
      <div className="Doctor_Container flex gap-4 w-full p-5">
        <div className="doc_img flex-1 flex justify-center items-center">
          <img src={doctor[0].image} alt="" />
        </div>
        <div className="flex-3 p-6 doctor_details flex flex-col justify-between">
          <h1 className="text-2xl font-semibold capitalize">
            dr. {doctor[0].username}
          </h1>
          <h4 className="doc_degree_experinece flex items-center gap-4">
            {doctor[0].degree} <span> {doctor[0].experience}</span>
          </h4>
          <div className="about_container">
            <h5 className="font-semibold text-xl capitalize">about</h5>
            <p> {doctor[0].description} </p>
          </div>
          <div className="fee_container capitalize">
            <h3>
              Appointment fee:{" "}
              <span className="text-xl font-semibold">${doctor[0].fee}</span>{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="Booking_Section my-4 p-4 flex items-center justify-center flex-col gap-8">
        <h2 className="capitalize item-start">Booking slots</h2>
        <Booking />
      </div>
    </section>
  );
}

export default Doctor;
