import { useEffect } from "react";
import BringDoctors from "../api/BringDoctors";
import { useDispatch, useSelector } from "react-redux";
import { setDoctors } from "../store/doctorSlice";
import type { AppDispatch, RootState } from "../store/store";
import type { Doctor } from "../store/doctorSlice";
import { Link } from "react-router";

function Doctors() {
  const dispatch = useDispatch<AppDispatch>();
  const { doctors } = useSelector((state: RootState) => state.Doctor);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const fetchedDoctors: Doctor[] = await BringDoctors();
        dispatch(setDoctors(fetchedDoctors));
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, [dispatch]);

  return (
    <div className="flex items-center justify-evenly gap-4 flex-wrap doctors_cards">
      {doctors.length === 0 ? (
        <p>No doctors found</p>
      ) : (
        doctors.map((doc) => (
          <Link to={`/doctors/${doc.id}`} key={doc.id} className="doc_card">
            <div className="doc_image w-full flex items-center justify-center p-2">
              <img src={doc.image} alt="" />
            </div>
            <div className="py-3 px-5">
              <h1 className="font-semibold text-xl capitalize">{`Dr. ${doc.username}`}</h1>
              <h3 className="font-normal">{doc.speciality}</h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Doctors;
