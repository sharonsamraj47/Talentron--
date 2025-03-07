import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/global.css';
import TrainersForm from './Trainer';
import EmployersForm from './Employer';


const Form2 = (props) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state_id: "",
    city_id: "",
    city2: "",
    email: "",
    notice_period: "",
    expected_salary: "",
    upload_file: null,
  });

  const [fileError, setFileError] = useState("");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [isStatesLoaded, setIsStatesLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("jobdata");
  const [formSubmissionMessage, setFormSubmissionMessage] = useState('');
  const fileInputRef = useRef(null);

  const formEndpoint = "https://shivam21bbbb.pythonanywhere.com/jobseekers";

  const fetchStates = async () => {
    try {
      const response = await axios.get("https://shivam21bbbb.pythonanywhere.com/statelist");
      console.log("State List Response:", response.data); // Debugging Line
      if (response.status === 200 && Array.isArray(response.data)) {
        setStateList(response.data);
        setIsStatesLoaded(true);
      } else {
        console.error("Invalid state data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching state list:", error);
    }
  };

  const handleStateChange = async (e) => {
    const selectedStateId = e.target.value;
    setFormData({ ...formData, state_id: selectedStateId, city_id: "" });
  
    if (selectedStateId) {
      try {
        const response = await axios.get(`https://shivam21bbbb.pythonanywhere.com/citylist/${selectedStateId}`);
        console.log("City List Response:", response.data); // Debugging Line
        if (response.status === 200 && Array.isArray(response.data)) {
          setCityList(response.data);
        } else {
          console.error("Invalid city data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching city list:", error);
      }
    } else {
      setCityList([]);
    }
  };
  
  useEffect(() => {
    fetchStates();
  }, []);
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        setFileError("File size must not exceed 3 MB.");
        setFormData({ ...formData, upload_file: null });
        fileInputRef.current.value = "";
        setTimeout(() => {
          setFileError('');
        }, 5000);
      } else {
        setFileError("");
        setFormData({ ...formData, upload_file: file });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmissionMessage('');

    if (!formData.city_id || !formData.state_id) {
      alert('Please enter both state and city.');
      return;
    }

    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form fields
        setFormData({
          name: "",
          phone: "",
          state_id: "",
          city_id: "",
          city2: "",
          email: "",
          notice_period: "",
          expected_salary: "",
          upload_file: null,
        });
        fileInputRef.current.value = "";
        setFormSubmissionMessage('Your form is submitted successfully!');

       
        setTimeout(() => {
          setFormSubmissionMessage('');
        }, 5000);
      } else{
        console.log('Form submission failed');
        setFormSubmissionMessage('Form submission failed. Please try again.');

     
        setTimeout(() => {
          setFormSubmissionMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormSubmissionMessage('An error occurred while submitting the form.');

      setTimeout(() => {
        setFormSubmissionMessage('');
      }, 5000);
    }
  };

  const handleTabClick = (tab) => {
    console.log("Active Tab:", tab); 
    setActiveTab(tab);
  };
  
  useEffect(() => {
    if (props.showForm && !isStatesLoaded) {
      fetchStates();
    }
  }, [props.showForm, isStatesLoaded]);

  return (
    <div className="formcontainer1711">
      {props.showForm && (
        <>  
        <div className="job-box">
            <div
              className="seek"
              style={{
                backgroundColor: activeTab === 'jobdata' ? 'white' : '',
                color: activeTab === 'jobdata' ? '#006CBB' : 'black',
              }}
              onClick={() => handleTabClick('jobdata')}
            >
              Job Seekers
            </div>
            <div
              className="seek"
              style={{
                backgroundColor: activeTab === 'trainers' ? 'white' : '',
                color: activeTab === 'trainers' ? '#006CBB' : 'black',
              }}
              onClick={() => handleTabClick('trainers')}
            >
              <img src="/images/trainer.png" alt="Trainer" className='form2_image' />
              Trainers
            </div>
            <div
              className="seek"
              style={{
                backgroundColor: activeTab === 'employers' ? 'white' : '',
                color: activeTab === 'employers' ? '#006CBB' : 'black',
              }}
              onClick={() => handleTabClick('employers')}
            >
              <img src="/images/employer.png" alt="Employer" className='form2_image' />
              Employers
            </div>
          </div>

          {activeTab === 'jobdata' && (
            <div className="job-form1">
          
              <h2>Ready to Work in our company?</h2>
              <form className="job-form" onSubmit={handleSubmit}>
                <div className="form-group1">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="phone">Contact Number*</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
  <label className='job-location-label'>Preferred Job Location*</label>
  <div className="select-container">
    <select
      name="state_id"
      value={formData.state_id}
      onChange={handleStateChange}
    >
      <option value="">Select State</option>
      {stateList.length > 0 ? (
        stateList.map((stateItem) => (
          <option key={stateItem.id} value={stateItem.id}>
            {stateItem.new_state_name}
          </option>
        ))
      ) : (
        <option disabled>Loading...</option>
      )}
    </select>
    
    <select
      name="city_id"
      value={formData.city_id}
      onChange={(e) => setFormData({ ...formData, city_id: e.target.value })}
      disabled={!formData.state_id || cityList.length === 0}
    >
      <option value="">Select District</option>
      {cityList.length > 0 ? (
        cityList.map((cityItem) => (
          <option key={cityItem.id} value={cityItem.id}>
            {cityItem.new_city_name}
          </option>
        ))
      ) : (
        <option disabled>No cities found</option>
      )}
    </select>
  </div>
</div>

                <div className="form-group1">
                  <label htmlFor="city2">City*</label>
                  <input
                    type="text"
                    id="city2"
                    name="city2"
                    placeholder="Enter City/Town/Village"
                    value={formData.city2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="notice_period">Notice Period*</label>
                  <input
                    type="text"
                    id="notice_period"
                    name="notice_period"
                    placeholder="Enter notice period"
                    value={formData.notice_period}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="expected_salary">Expected Salary*</label>
                  <input
                    type="text"
                    id="expected_salary"
                    name="expected_salary"
                    placeholder="Enter expected salary"
                    value={formData.expected_salary}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group1">
  <label>Upload Resume*</label>
  <input
    type="file"
    ref={fileInputRef}
    accept=".doc,.docx,.pdf"
    onChange={handleFileUpload}
    className="custom-file-input"
  />
  {fileError && <p className="error-message">{fileError}</p>}
</div>
                <button type="submit" className="form-submit-button">Submit</button>
                {formSubmissionMessage && (
              <p className="submission-message">{formSubmissionMessage}</p>
            )}
              </form>
            </div>
          )}

          {activeTab === 'trainers' && <TrainersForm />}
          {activeTab === 'employers' && <EmployersForm />}
        </>
      )}
    </div>
  );
};

export default Form2;