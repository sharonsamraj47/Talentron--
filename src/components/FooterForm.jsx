import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../styles/global.css";

const FooterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalTitle, setModalTitle] = useState("Message");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

      const result = await response.json();

      if (result.success) {
        setModalTitle("Success!");
        setModalMessage("Successfully saved!");
        setName("");
        setEmail("");
      } else if (result.message === "Email already exists") {
        setModalTitle("Duplicate Entry");
        setModalMessage("The email already exists. Please use a different email.");
        setName("");
        setEmail("");
      } else {
        setModalTitle("Error");
        setModalMessage("Failed to save. Try again!");
        setName("");
        setEmail("");
      }
    } catch (err) {
      setModalTitle("Error");
      setModalMessage("Error: " + err.message);
    }
    setShowModal(true);
  };

  return (
    <div
      className="footer-top text-center footer-background-color text-white pt-4 pb-4"
    >
      <h2 className="headline white-text">
        Don't Miss Out, Develop Your Coding Skills with Talentron
      </h2>
      <p className="subtitle white-text">Advance Training Session</p>
      <form
        id="form"
        className="row g-2 justify-content-center align-items-center mt-4 custom-form"
        onSubmit={handleSubmit}
      >
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your Mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-sm btn-dark custom-submit">
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        id="responseModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="responseModalLabel">{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalMessage">{modalMessage}</Modal.Body>
        <Modal.Footer>
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

export default FooterForm;
