import { useState } from "react";
import Specialities from "../../components/Specialities";
import GetSpecificDotors from "../../components/GetSpecificDotors";

export type Specialist =
  | "General physician"
  | "Gastroenterologist"
  | "Neurologist"
  | "Pediatricians"
  | "Dermatologist"
  | "Gynecologist";

function AllDoctors() {
  const [specialist, setSpecialist] = useState<Specialist | null>(null);
  return (
    <section className="All_Doctors_Section py-4">
      <h3 className="section_title py-8 px-4 text-xl capitalize">
        Browse through the doctors specialist.
      </h3>
      <div className="flex w-full justify-center gap-6">
        <div className="flex-1 p-4">
          <Specialities setSpecialist={setSpecialist} />
        </div>
        <div className="flex-3 p-4">
          <GetSpecificDotors speciality={specialist} />
        </div>
      </div>
    </section>
  );
}

export default AllDoctors;
