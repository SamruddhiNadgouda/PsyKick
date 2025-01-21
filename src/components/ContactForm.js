import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log("Form Submitted", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-form-container" style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Contact Us</h2>
      {isSubmitted && <p style={{ color: "green" }}>Your message has been sent successfully!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          ></textarea>
          {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
