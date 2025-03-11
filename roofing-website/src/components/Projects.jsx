import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // ✅ Import i18n hook
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

// ** Import Project Images **
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";

const Projects = () => {
  const { t} = useTranslation(); // ✅ Initialize i18next

  const projects = [
    {
      id: "residentialRoofRepair",
      image: project1,
      gallery: [project1, project2, project3],
    },
    {
      id: "commercialRoofing",
      image: project2,
      gallery: [project2, project4, project5],
    },
    {
      id: "emergencyRoofFix",
      image: project3,
      gallery: [project3, project1, project2],
    },
    {
      id: "newRoofInstallation",
      image: project4,
      gallery: [project4, project5, project1],
    },
    {
      id: "gutterInstallation",
      image: project5,
      gallery: [project5, project2, project4],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const openGallery = (project) => {
    setSelectedProject(project);
    setSelectedImage(project.image);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Header>
          <h1>{t("projectsPage.title")}</h1>
          <p>{t("projectsPage.subtitle")}</p>
        </Header>

        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id}>
              <motion.img
                src={project.image}
                alt={t(`projectsPage.${project.id}.title`)}
                onClick={() => openGallery(project)}
                whileHover={{ scale: 1.05 }}
              />
              <div className="text-content">
                <h2>{t(`projectsPage.${project.id}.title`)}</h2>
                <p>{t(`projectsPage.${project.id}.description`)}</p>
              </div>
            </ProjectCard>
          ))}
        </Grid>

        {selectedProject && (
          <ModalOverlay onClick={closeGallery}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeGallery}>&times;</CloseButton>

              {selectedProject.gallery && (
                <GalleryThumbnails>
                  {selectedProject.gallery.map((img, i) => (
                    <Thumbnail
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      onClick={() => setSelectedImage(img)}
                      isSelected={selectedImage === img}
                    />
                  ))}
                </GalleryThumbnails>
              )}

              <MainImage src={selectedImage} alt="Selected Project" />
            </ModalContainer>
          </ModalOverlay>
        )}
      </Container>
      <Footer />
    </Wrapper>
  );
};

// ** Styled Components **
const Wrapper = styled.div`
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  text-align: center;
  padding: 50px 20px;
  color: black;
  flex-grow: 1;
`;

const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.3rem;
    color: #666;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 50px 10px;
  max-width: 1200px;
  margin: auto;
`;

const ProjectCard = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }

  .text-content {
    padding: 20px 0;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

/* 🔹 MODAL STYLES */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  max-height: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: black;
  font-size: 30px;
  cursor: pointer;
`;

/* 🔹 Gallery Thumbnails */
const GalleryThumbnails = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "2px solid black" : "none")};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
`;

export default Projects;
