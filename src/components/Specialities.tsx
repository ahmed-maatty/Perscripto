import type { Specialist } from "../views/Home/AllDoctors";

interface Iprops {
  setSpecialist: React.Dispatch<React.SetStateAction<Specialist | null>>;
}

function Specialities({ setSpecialist }: Iprops) {
  const btns: { txt: string; specialist: Specialist }[] = [
    { txt: "General physician", specialist: "General physician" },
    { txt: "Gastroenterologist", specialist: "Gastroenterologist" },
    { txt: "Pediatricians", specialist: "Pediatricians" },
    { txt: "Dermatologist", specialist: "Dermatologist" },
    { txt: "Gynecologist", specialist: "Gynecologist" },
    { txt: "Neurologist", specialist: "Neurologist" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {btns.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => setSpecialist(btn.specialist)}
          className="selectSpecialityBtn py-4 cursor-pointer"
        >
          {btn.txt}
        </button>
      ))}
    </div>
  );
}

export default Specialities;
