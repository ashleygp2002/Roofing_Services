import React from "react";
import { useTranslation } from "react-i18next"; // ✅ Import i18n hook
import styled from "styled-components";
import Navbar from "./Navbar";  
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// ** Import Project Images **
import project1 from "../assets/emergencyRoofing.jpg";
// import project2 from "../assets/project2.jpg";
// import project3 from "../assets/roof_repair3.jpg";
import newRoof1 from "../assets/project2.jpg";
import repair from "../assets/repair.jpg";
import gutter from "../assets/gutter.jpg";
import shingles from "../assets/shingles.jpg"; 
import demolition from "../assets/demolition.jpg"; 
import torch from "../assets/torch.jpg"; 
import roofTile from "../assets/roof_tile.jpg"; 
import plywood from "../assets/plywood.jpg"; 
import homeRepair from "../assets/home_repair1.jpg"; 

const Services = () => {
  const { t, ready } = useTranslation(); // ✅ Initialize i18next
  if (!ready) return null;

  const services = [
    {
      id: "roofRepair",
      images: [repair], 
    },
    {
      id: "roofInstallation",
      images: [newRoof1],
    },
    {
      id: "gutterInstallation",
      images: [gutter], 
    },
    {
      id: "emergencyRoofing",
      images: [project1], 
    },
    {
      id: "shingles",
      images: [shingles], 
    },
    {
      id: "demolition",
      images: [demolition], 
    },
    {
      id: "torch",
      images: [torch], 
    },
    {
      id: "roofTile",
      images: [roofTile], 
    },
    {
      id: "plywood",
      images: [plywood], 
    },
    {
      id: "homeRepair",
      images: [homeRepair], 
    },
  ];

  return (
    <PageContainer>
      <Navbar />
      <SectionContainer>
        <SectionTitle>{t("servicesPage.title")}</SectionTitle>
        {services.map((service, index) => (
          <ServiceItem key={service.id} service={service} reverse={index % 2 !== 0} />
        ))}
      </SectionContainer>
      <Footer />
    </PageContainer>
  );
};

const ServiceItem = ({ service, reverse }) => {
  const { t } = useTranslation();
  return (
    <StyledServiceItem reverse={reverse}>
      <div className="text-content">
        <ServiceTitle>{t(`servicesPage.${service.id}.title`)}</ServiceTitle>
        <ServiceDescription>{t(`servicesPage.${service.id}.description`)}</ServiceDescription>
      </div>

      <div className="swiper-container">
        <Swiper navigation={true} modules={[Navigation]} className="service-swiper">
          {service.images.map((image, index) => (
            <SwiperSlide key={index}>
              <ServiceImage src={image} alt={`${t(`servicesPage.${service.id}.title`)} ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledServiceItem>
  );
};

// **Styled Components**
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa;
  color: #333;
  padding: 50px 0;
`;

const SectionTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const StyledServiceItem = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 80px 0;

  .text-content {
    width: 50%;
    text-align: ${({ reverse }) => (reverse ? "right" : "left")};
  }

  .swiper-container {
    width: 45%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .text-content {
      width: 100%;
    }

    .swiper-container {
      width: 100%;
    }
  }
`;

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.6;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

export default Services;
