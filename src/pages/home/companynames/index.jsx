import React from "react";
import {
  JbHospital,
  JmHospital,
  SooryaHospital,
  SooryaHospitalIcon,
  PowerIndustries,
  MvrMedicalCenter,
} from "../../../assets";
import "./companynames.css";

function Companynames() {
  return (
    <div className="company-names" data-aos="fade-down">
      <div className="company-names-div" >
        <div className="slider">
          <img src={JbHospital} alt="JbHospital" />
        </div>
        <div className="soorya-hospital slider">
          <img src={SooryaHospitalIcon} alt="SooryaHospitalIcon" />
          <img src={SooryaHospital} alt="SooryaHospital" />
        </div>
        <div className="slider">
          <img src={PowerIndustries} alt="PowerIndustries" />
        </div>
        <div className="slider">
          <img src={JmHospital} alt="JmHospital" />
        </div>
        <div className="slider">
          <img src={MvrMedicalCenter} alt="MvrMedicalCenter" />
        </div>

        {/* clone */}

        <div className="slider">
          <img src={JbHospital} alt="JbHospital" />
        </div>
        <div className="soorya-hospital slider">
          <img src={SooryaHospitalIcon} alt="SooryaHospitalIcon" />
          <img src={SooryaHospital} alt="SooryaHospital" />
        </div>
        <div className="slider">
          <img src={PowerIndustries} alt="PowerIndustries" />
        </div>
        <div className="slider">
          <img src={JmHospital} alt="JmHospital" />
        </div>
        <div className="slider">
          <img src={MvrMedicalCenter} alt="MvrMedicalCenter" />
        </div>
      </div>
    </div>
  );
}

export default Companynames;

// <Swiper
// className="mySwiper"
// spaceBetween={100}
// slidesPerView={4}
// loop={true}
// autoplay={{
//   delay: 30,
// }}>
// <SwiperSlide>
//   <img src={JbHospital} alt="JbHospital" />
// </SwiperSlide>
// <SwiperSlide>

//   <img src={SooryaHospital} alt="SooryaHospital" />
// </SwiperSlide>
// <SwiperSlide>
//   <img src={PowerIndustries} alt="PowerIndustries" />
// </SwiperSlide>
// <SwiperSlide>

//   <img src={JmHospital} alt="JmHospital" />

// </SwiperSlide>
// <SwiperSlide>
//   <img src={MvrMedicalCenter} alt="MvrMedicalCenter" />
// </SwiperSlide>
// </Swiper>

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
