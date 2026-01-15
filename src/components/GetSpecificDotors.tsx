import type { Specialist } from "../views/Home/AllDoctors";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Link } from "react-router";

interface Iprops {
  speciality: Specialist | null;
}

function GetSpecificDotors({ speciality }: Iprops) {
  const { doctors } = useSelector((state: RootState) => state.Doctor);
  return (
    <div
      className="flex items-center justify-start gap-6 flex-wrap doctors_cards"
      style={{ overflow: "auto" }}
    >
      {speciality === null
        ? doctors.map((doc) => (
            <Link to={`/doctor/${doc.id}`} key={doc.id} className="doc_card">
              <div className="doc_image w-full flex items-center justify-center p-2">
                <img src={doc.image} alt="" />
              </div>
              <div className="py-3 px-5">
                <h1 className="font-semibold text-xl capitalize">{`Dr. ${doc.username}`}</h1>
                <h3 className="font-normal">{doc.speciality}</h3>
              </div>
            </Link>
          ))
        : doctors
            .filter((doc) => doc.speciality === speciality)
            .map((doc) => (
              <Link to={`/doctor/${doc.id}`} key={doc.id} className="doc_card">
                <div className="doc_image w-full flex items-center justify-center p-2">
                  <img src={doc.image} alt="" />
                </div>
                <div className="py-3 px-5">
                  <h1 className="font-semibold text-xl capitalize">{`Dr. ${doc.username}`}</h1>
                  <h3 className="font-normal">{doc.speciality}</h3>
                </div>
              </Link>
            ))}
    </div>
  );
}

export default GetSpecificDotors;
