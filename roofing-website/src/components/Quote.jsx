import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";  

const Quote = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // ✅ New state to prevent double submissions

    const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (isSubmitting) return; // ✅ Prevent clicking multiple times
    setIsSubmitting(true); // ✅ Disable button after first click

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/ajax/royalcrownroofingservices@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
        "Accept": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
        if (data.success) {
            setIsSubmitted(true); // ✅ Show success message
        } else {
            alert("Error sending request. Please try again.");
        }
        })
        .catch((error) => console.error("Form Submission Error:", error))
        .finally(() => setIsSubmitting(false)); // ✅ Re-enable button after submission
    };


  return (
    <QuoteContainer>
      <Navbar /> {/* ✅ Navbar stays on this page */}

      <FormWrapper>
        {isSubmitted ? (
          <SuccessMessage>Your quote request has been sent successfully! 🎉</SuccessMessage>
        ) : (
          <>
            <h1>Request a Quote</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="tel" name="phone" placeholder="Your Phone Number" required />

              {/* Service Dropdown */}
              <Select name="service" required>
                <option value="">Select a Service</option>
                <option value="Roof Repair">Roof Repair</option>
                <option value="New Roof Installation">New Roof Installation</option>
                <option value="Gutter Installation">Gutter Installation</option>
                <option value="Maintenance & Cleaning">Maintenance & Cleaning</option>
                <option value="Emergency Roofing">Emergency Roofing</option>
              </Select>

              <textarea name="message" placeholder="Additional Details" required></textarea>

              {/* Hidden Fields for Email Formatting */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <button type="submit" disabled={isSubmitting} className={`w-full py-2 rounded-md ${isSubmitting ? "bg-gray-500" : "bg-black text-white"}`}>
                {isSubmitting ? "Sending..." : "Send Quote Request"}
                </button>

            </form>
          </>
        )}
      </FormWrapper>
    </QuoteContainer>
  );
};

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensures full-page height */
  background: url('/assets/roofing-bg.jpg') no-repeat center center;
  background-size: cover;
  padding: 20px;
  width: 100%;
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.5);
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
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
