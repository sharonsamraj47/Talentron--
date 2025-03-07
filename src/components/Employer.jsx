import React, { useState } from 'react';
import '../styles/employers.css';

const EmployersForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

    setTimeout(() => {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }, 5000);
  };

  const validateForm = () => {
    const { name, email, contact, website, requirements } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Company Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!contact.trim()) newErrors.contact = "Contact No is required";
    if (!website.trim()) newErrors.website = "Website URL is required";
    if (!requirements.trim()) newErrors.requirements = "Requirements are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setMessage("Please fill all required fields.");
      setMessageType("error");
    }

    setTimeout(() => {
      setErrors({});
    }, 5000);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    try {
      const response = await fetch("https://shivam21bbbb.pythonanywhere.com/employers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setMessageType("success");
        setFormData({
          name: "",
          email: "",
          contact: "",
          website: "",
          requirements: "",
        });
      } else {
        setMessage("Error submitting the form. Please try again.");
        
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage('⚠️ An error occurred while submitting the form.');
    }
  };

  return (
    <div className="employers-form-container">
      <h2 className="employers-form-heading">
      Ready to Hire? Share Your Requirements with Us
      </h2>
      <form className="employers-form" onSubmit={handleSubmit}>
  <div className="form-group3">
    <label>Company Name*</label>
    <input type="text" name="name" placeholder="Enter Company Name" value={formData.name} onChange={handleInputChange} />
    {errors.name && <p className="error-message">{errors.name}</p>}
  </div>

  <div className="form-group3">
    <label>Email*</label>
    <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
    {errors.email && <p className="error-message">{errors.email}</p>}
  </div>

  <div className="form-group3">
    <label>Contact No*</label>
    <input type="text" name="contact" placeholder="Enter Phone No" value={formData.contact} onChange={handleInputChange} />
    {errors.contact && <p className="error-message">{errors.contact}</p>}
  </div>

  <div className="form-group3">
    <label>Website*</label>
    <input type="text" name="website" placeholder="Enter Website URL" value={formData.website} onChange={handleInputChange} />
    {errors.website && <p className="error-message">{errors.website}</p>}
  </div>

  <div className="form-group3">
          <label>High-Level Requirements*</label>
          <textarea
            name="requirements"
            placeholder="Enter Your Requirements"
            value={formData.requirements}
            onChange={handleInputChange}
            className="requirements-textarea"
          />
          {errors.requirements && (
            <p className="error-message">{errors.requirements}</p>
          )}
        </div>

  <button type="submit" className="form-submit-button">Submit</button>
  {message && <p className="submission-message">{message}</p>}
</form>


    </div>
  );
};

export default EmployersForm1;
