import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
export default function AddProduct() {
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    likes: "0",
  });
  const { title, description, price } = formData;
  const onChangeFile = (e) =>
    setFormData({ ...formData, image: e.target.files[0] });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const [, err] = await queryApi("product", formData, "POST", true);
    if (err) {
      setShowLoader(false);
      setError({
        visible: true,
        message: JSON.stringify(err.errors, null, 2),
      });
    } else history.push("/products");
  };
  return (
    <Wrapper className="fade">
      
      <Form onSubmit={onSubmit}>
      <FormGroup><Title>Add new product</Title></FormGroup>
        <FormGroup>
          {error.visible && <FormError>{error.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => onChange(e)}
          ></FormField>
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></FormField>
        </FormGroup>
        <FormGroup>
          <FormField
            type="number"
            step="0.1"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => onChange(e)}
          ></FormField>
        </FormGroup>
        <FormGroup>
          <FormField
            type="file"
            name="image"
            onChange={(e) => onChangeFile(e)}
          ></FormField>
        </FormGroup>
        {showLoader && <Spinner></Spinner>}
        <FormButton disabled={showLoader}>Save</FormButton>
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  text-transform: uppercase;
  color: black;
`;
const FormGroup = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  text-transform: uppercase;
  color: black;
  display: flex;
  flex-direction: column;
  width: 33%;
  align-self: center;
`;
const FormField = styled.input`
  color: black;
  padding: 15px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #ebebeb;
  ::placeholder {
    text-transform: uppercase;
    font-family: "Kiona";
    font-size: large;
    letter-spacing: 0.1rem;
  }
`;
const FormButton = styled.button`
  background: #7b1bf7;
  text-transform: uppercase;
  color: white;
  border-radius: 25px;
  padding: 15px;
  border: 0;
  font-size: large;
  margin: 10px 0;
  font: 200 larger Kiona;
`;
const FormError = styled.p`
  color: #f74b1b;
`;
const Spinner = () => (
  <Loader viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </Loader>
);
const Loader = styled.svg`
  animation: rotate 2s linear infinite;
  display: flex;
  align-self: center;
  width: 50px;
  height: 50px;
  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;