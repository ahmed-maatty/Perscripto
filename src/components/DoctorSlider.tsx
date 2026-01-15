import { useEffect } from "react";
import BringDoctors from "../api/BringDoctors.ts";
import { setDoctors } from "../store/doctorSlice";
import Slider from "react-slick";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DoctorSlider() {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state: RootState) => state.Doctor);
  useEffect(() => {
    const fetchData = async () => {
      const data = await BringDoctors();
      dispatch(setDoctors(data));
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(doctors);
  return (
    <Slider {...settings}>
      {doctors.map((doc) => (
        <div key={doc.id} className="px-3">
          <Link
            to={`doctor/${doc.id}`}
            className="doc_card block"
            style={{ width: "100%" }}
          >
            <div className="doc_image w-full flex items-center justify-center p-2">
              <img src={doc.image} alt="" />
            </div>
            <div className="py-3 px-5">
              <h1 className="font-semibold text-xl capitalize">
                {`Dr. ${doc.username}`}
              </h1>
              <h3 className="font-normal">{doc.speciality}</h3>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default DoctorSlider;
