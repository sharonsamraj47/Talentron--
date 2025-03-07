import React, { useState } from 'react';
import '../styles/trainerForm.css';

const TrainersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    website: "",
    linkedin: "",
    expert: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, contact, email, linkedin, expert } = formData;

    if (!name.trim()) return showMessage('Full Name is required.', 'error');
    if (!contact.trim()) return showMessage('Contact is required.', 'error');
    if (!email.trim()) return showMessage('Email is required.', 'error');
    if (!linkedin.trim()) return showMessage('LinkedIn profile is required.', 'error');
    if (!expert.trim()) return showMessage('Expertise is required.', 'error');

    return true;
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 5000);

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://shivam21bbbb.pythonanywhere.com/trainers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showMessage('Form submitted successfully!', 'success');
        setFormData({
          name: "",
          contact: "",
          email: "",
          website: "",
          linkedin: "",
          expert: "",
        });
      }else {
        showMessage('Error submitting the form. Please try again.', 'error');
      }
    } catch {
      showMessage('An error occurred while submitting the form.', 'error');
    }
  };

  return (
   <form className="trainer-form" onSubmit={handleSubmit}>
  <h2 className="trainer-form-title">Join Our Team - Trainer Application</h2>


  <div className="form-grid">
    <div className="form-group2">
      <label>Full Name*</label>
      <input type="text" name="name" placeholder="Enter Full Name" value={formData.name} onChange={handleInputChange} />
    </div>
    
    <div className="form-group2">
      <label>Contact*</label>
      <input type="text" name="contact" placeholder="Enter Contact" value={formData.contact} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>Email*</label>
      <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>Website (if Company)</label>
      <input type="text" name="website" placeholder="Enter Website" value={formData.website} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>LinkedIn*</label>
      <input type="text" name="linkedin" placeholder="Enter LinkedIn Profile" value={formData.linkedin} onChange={handleInputChange} />
    </div>

    <div className="form-group2">
      <label>Expert In*</label>
      <select name="expert" value={formData.expert} onChange={handleInputChange} className="expertise-dropdown">
        <option value="">Select Expertise</option>
        <option value="Full Stack Development">Full Stack Development</option>
        <option value="Frontend Development">Frontend Development</option>
        <option value="Backend Development">Backend Development</option>
        <option value="Software Testing">Software Testing</option>
        <option value="Data Engineering">Data Engineering</option>
        <option value="Test Automation">Test Automation</option>
        <option value="Robotic Process Automation">Robotic Process Automation</option>
      </select>
    </div>
  </div>

  <button type="submit" className="form-submit-button">Submit</button>
  {message.text && <p className={`submission-message ${message.type}`}>{message.text}</p>}

</form>

  );
};

export default TrainersForm;
