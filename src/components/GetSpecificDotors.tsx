import React from "react";
import type { Specialist } from "../views/AllDoctors";

interface Iprops {
  speciality: Specialist | null;
}

function GetSpecificDotors({ speciality }: Iprops) {
  return(
    <div className="view">
      {speciality}
    </div>
  );
}

export default GetSpecificDotors;
