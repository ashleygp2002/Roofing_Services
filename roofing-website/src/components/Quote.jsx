import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Navbar from "./Navbar";  
import roofingImage from "../assets/roofing.jpg";
import Footer from "./Footer";

const Quote = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const response = await fetch("https://formsubmit.co/ajax/royalcrownroofingservices@gmail.com", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(t("quote.errorMessage"));
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      alert(t("quote.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: `url(${roofingImage})` }}>
      <Navbar />

      {/* ✅ Added Spacing Above & Below */}
      <div className="flex flex-grow items-center justify-center mt-16 mb-16">
        <FormWrapper>
          {!isSubmitted ? (
            <>
              <h1>{t("quote.title")}</h1>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={t("quote.name")} required />
                <input type="email" name="email" placeholder={t("quote.email")} required />
                <input type="tel" name="phone" placeholder={t("quote.phone")} required />

                {/* Service Dropdown */}
                <Select name="service" required>
                  <option value="">{t("quote.selectService")}</option>
                  <option value="Roof Repair">{t("services1.roofRepair")}</option>
                  <option value="New Roof Installation">{t("services1.roofInstallation")}</option>
                  <option value="Gutter Installation">{t("services1.gutterInstallation")}</option>
                  <option value="Maintenance & Cleaning">{t("services1.maintenance")}</option>
                  <option value="Emergency Roofing">{t("services1.emergencyRoofing")}</option>
                  <option value="Shingles">{t("services1.shingles")}</option>
                  <option value="Demolition">{t("services1.demolition")}</option>
                  <option value="Torch Roofing">{t("services1.torch")}</option>
                  <option value="Roof Tile Installation">{t("services1.roofTile")}</option>
                  <option value="Plywood Replacement">{t("services1.plywood")}</option>
                  <option value="Home Repair">{t("services1.homeRepair")}</option>
                </Select>

                <textarea name="message" placeholder={t("quote.details")} required></textarea>

                {/* Hidden Fields for Email Formatting */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <button type="submit" disabled={isSubmitting} className={`w-full py-2 rounded-md ${isSubmitting ? "bg-gray-500" : "bg-green-600 text-white"}`}>
                  {isSubmitting ? t("quote.sending") : t("quote.sendRequest")}
                </button>
              </form>
            </>
          ) : (
            <SuccessMessage>{t("quote.successMessage")}</SuccessMessage>
          )}
        </FormWrapper>
      </div>

      <Footer />
    </div>
  );
};

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3); 
  backdrop-filter: blur(10px); 
  padding: 40px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input, textarea, select {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.2); 
    color: white;
    outline: none;
    transition: all 0.3s ease-in-out;
  }

  select {
    cursor: pointer;
  }

  input::placeholder, textarea::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Courier New", monospace;
  }

  textarea {
    height: 120px;
  }

  input:focus, textarea:focus, select:focus {
    background: rgba(255, 255, 255, 0.3);
  }

  button {
    width: 100%;
    padding: 14px;
    background: #4caf50;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background: #3e8e41;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
`;

const SuccessMessage = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: lightgrey;
  text-align: center;
  padding: 20px;
`;

export default Quote;
