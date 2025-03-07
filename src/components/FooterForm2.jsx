import "../styles/global.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from "react-bootstrap"; // Import Bootstrap Modal

const Form4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setModalTitle("Error");
      setModalMessage("Both fields are required.");
      setShowModal(true);
      return;
    }
    try {
      const response = await axios.post('https://shivam21bbbb.pythonanywhere.com/contact', {
        full_name: formData.name,
        email: formData.email,
      });
      if (response.status === 201) {
        setModalTitle("Success");
        setModalMessage("Your form has been submitted successfully!");
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setModalTitle("Error");
      setModalMessage("Failed to submit the form. Please try again.");
      setShowModal(true);
    }
  };

  return (
    <div className="boxy footer-top">
      <div className="text3">
        <span>Don't Miss Out, Develop Your Coding Skills with Talentron</span>
        <p>Advance Training Session</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="form"
          type="text"
          name="name"
          placeholder="Full Name"
          className="text"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          id="form2"
          type="email"
          name="email"
          placeholder="Enter your Mail Id"
          className="text"
          value={formData.email}
          onChange={handleChange}
        />
        {/* Custom Submit Button */}
        <button type="submit" className="custom-submit-btn">
          Submit
        </button>
      </form>

      {/* Bootstrap Modal */}
<Modal
  show={showModal}
  onHide={() => setShowModal(false)}
  centered
  id="responseModal"
>
  <Modal.Header className="modal-header">
    <Modal.Title id="responseModalLabel" className="modal-title">
      {modalTitle}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body 
    id="modalMessage" 
    className={modalTitle === "Success" ? "modal-message-success" : "modal-message-error"}
  >
    {modalMessage}
  </Modal.Body>
  <Modal.Footer className="modal-footer">
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => setShowModal(false)}
    >
      Close
    </button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default Form4;
