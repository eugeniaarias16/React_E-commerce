
import React, { useState } from 'react';
import {
  FormContainer,
  Label,
  Input,
  Select,
  SubmitButton,
  CheckboxContainer,
  ErrorMessage,
} from './PaymentStyles';

export const PayForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    dni: "",
    address: "",
    email: "",
    cardNumber: "",
    cvc: "",
    expiryDate: "",
    securityCode: "",
  });
  const [errors, setErrors] = useState({});
  const [isCredit, setIsCredit] = useState(false);
  const [isDebit, setIsDebit] = useState(false);

  const handleCheckboxChange = (type) => {
    if (type === "credit") setIsCredit(!isCredit);
    if (type === "debit") setIsDebit(!isDebit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Real-time validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName") {
      if (!/^[A-Za-z\s]+$/.test(value)) {
        error = "Only letters are allowed";
      }
    }

    if (name === "dni") {
      if (!/^\d+$/.test(value)) {
        error = "Only numbers are allowed";
      } else if (value.length !== 8) {
        error = "DNI must be 8 digits";
      }
    }

    if (name === "email") {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "cardNumber") {
      if (!/^\d{16}$/.test(value)) {
        error = "Card number must be 16 digits";
      }
    }

    if (name === "cvc") {
      if (!/^\d{4}$/.test(value)) {
        error = "CVC must be 4 digits";
      }
    }

    if (name === "expiryDate") {
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
        error = "Expiry date must be in MM/YY format";
      }
    }

    if (name === "securityCode") {
      if (!/^\d{3}$/.test(value)) {
        error = "Security code must be 3 digits";
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
      alert("Payment information submitted successfully!");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Label>Full Name</Label>
        <Input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formValues.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
      </div>
      
      <div>
        <Label>DNI</Label>
        <Input
          type="text"
          name="dni"
          placeholder="Enter your DNI"
          value={formValues.dni}
          onChange={handleChange}
          required
        />
        {errors.dni && <ErrorMessage>{errors.dni}</ErrorMessage>}
      </div>

      <div>
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

      <CheckboxContainer>
        <input
          type="checkbox"
          id="isDebit"
          checked={isDebit}
          onChange={() => handleCheckboxChange("debit")}
        />
        <label htmlFor="isDebit">Debit</label>

        <input
          type="checkbox"
          id="isCredit"
          checked={isCredit}
          onChange={() => handleCheckboxChange("credit")}
        />
        <label htmlFor="isCredit">Credit</label>
      </CheckboxContainer>

      {isCredit && (
        <>
          <Label>Installments</Label>
          <Select name="installments" onChange={handleChange}>
            <option value="3">3 installments (no interest)</option>
            <option value="6">6 installments (5% interest)</option>
            <option value="12">12 installments (10% interest)</option>
          </Select>
        </>
      )}

      <div style={{ gridColumn: "span 2" }}>
        <Label>Card Number</Label>
        <Input
          type="text"
          name="cardNumber"
          placeholder="Enter your card number"
          value={formValues.cardNumber}
          onChange={handleChange}
          required
        />
        {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
      </div>

      <div>
        <Label>CVC</Label>
        <Input
          type="text"
          name="cvc"
          placeholder="MM/YY"
          value={formValues.cvc}
          onChange={handleChange}
          required
        />
        {errors.cvc && <ErrorMessage>{errors.cvc}</ErrorMessage>}
      </div>

      <div>
        <Label>Security Code</Label>
        <Input
          type="password"
          name="securityCode"
          placeholder="Enter security code"
          value={formValues.securityCode}
          onChange={handleChange}
          required
        />
        {errors.securityCode && <ErrorMessage>{errors.securityCode}</ErrorMessage>}
      </div>

      <SubmitButton type="submit">PAY</SubmitButton>
    </FormContainer>
  );
};
