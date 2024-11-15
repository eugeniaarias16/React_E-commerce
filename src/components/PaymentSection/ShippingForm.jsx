// ShippingForm.js
import { useState } from 'react';
import React from 'react';
import { FormContainer, Label, Input, Select, SubmitButton, CheckboxContainer, ErrorMessage } from './PaymentStyles';

export const ShippingForm = () => {
  const [isApartment, setIsApartment] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    floorApartment: "",
    postalCode: "",
    recipientDNI: "",
  });
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = () => {
    setIsApartment(!isApartment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Real-time validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        error = "Only letters are allowed";
      }
    }

    if (name === "email") {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "phoneNumber") {
      if (!/^\d+$/.test(value)) {
        error = "Only numbers are allowed";
      } else if (value.length < 10) {
        error = "Enter a valid phone number";
      }
    }

    if (name === "postalCode" || name === "recipientDNI") {
      if (!/^\d+$/.test(value)) {
        error = "Only numbers are allowed";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formValues).forEach((field) => {
      validateField(field, formValues[field]);
      if (!formValues[field]) newErrors[field] = "This field is required";
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Label>First Name</Label>
        <Input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formValues.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
      </div>
      
      <div>
        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formValues.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
      </div>

      <div>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>
      
      <div>
        <Label>Phone Number</Label>
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formValues.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
      </div>

      <div style={{ gridColumn: "span 2" }}>
        <Label>Address</Label>
        <Input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formValues.address}
          onChange={handleChange}
          required
        />
      </div>

      <CheckboxContainer>
        <input
          type="checkbox"
          id="isApartment"
          checked={isApartment}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="isApartment">Is it an Apartment?</label>
      </CheckboxContainer>

      <div style={{ gridColumn: isApartment ? "1 / 3" : "1 / 2" }}>
        <Label>Floor/Apartment Number</Label>
        <Input
          type="text"
          name="floorApartment"
          placeholder="Enter floor/apt number"
          disabled={!isApartment}
          value={formValues.floorApartment}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label>Postal Code</Label>
        <Input
          type="text"
          name="postalCode"
          placeholder="Enter your postal code"
          value={formValues.postalCode}
          onChange={handleChange}
          required
        />
        {errors.postalCode && <ErrorMessage>{errors.postalCode}</ErrorMessage>}
      </div>

      <div>
        <Label>Preferred Delivery Time</Label>
        <Select name="preferredTime" onChange={handleChange} required>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
        </Select>
      </div>

      <div style={{ gridColumn: "span 2" }}>
        <Label>Recipient DNI</Label>
        <Input
          type="text"
          name="recipientDNI"
          placeholder="Enter recipient's DNI"
          value={formValues.recipientDNI}
          onChange={handleChange}
          required
        />
        {errors.recipientDNI && <ErrorMessage>{errors.recipientDNI}</ErrorMessage>}
      </div>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};