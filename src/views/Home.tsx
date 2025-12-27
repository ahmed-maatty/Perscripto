import doctorHeaderImg from "/assets/doc_header.png";
import appointmentDoctor from "/assets/appointment-doc-img.png";
import groupProfile from "/assets/group_profiles.png";

function Home() {
  const speciality = [
    { img: "/assets/General_physician.svg", txt: "General physician" },
    { img: "/assets/Gynecologist.svg", txt: "Gynecologist" },
    { img: "/assets/Dermatologist.svg", txt: "Dermatologist" },
    { img: "/assets/Pediatricians.svg", txt: "Pediatricians" },
    { img: "/assets/Neurologist.svg", txt: "Neurologist" },
    { img: "/assets/Gastroenterologist.svg", txt: "Gastroenterologist" },
  ];
  return (
    <section className="Home">
      <div className="Hero">
        <div className="hero_desc">
          <h1>
            Book Appointment <br /> With Trusted Doctors
          </h1>
          <p>
            <img src={groupProfile} alt="" />
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="hero_img">
          <img src={doctorHeaderImg} alt="" />
        </div>
      </div>
      <div className="Specility">
        <div className="section_title">
          <h2>Find by Speciality</h2>
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule
            <br />
            your appointment hassle-free.
          </p>
        </div>
        <div className="speciality-content">
          {speciality.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt="" />
              <p>{item.txt}</p>
            </div>
          ))}
        </div>
      </div>
      {/** Doctor Slider **/}

      <div className="BookNow">
        <div className="details">
          <h1>
            Book Appointment <br /> With 100+ Trusted Doctors
          </h1>
        </div>
        <div className="book_image">
          <img src={appointmentDoctor} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
