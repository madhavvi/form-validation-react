import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./Form.css";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="form-validation-wrapper">
      <h1>Form Validation</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field className="form-field">
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 10,
              pattern: /^([A-Za-z0-9_-]){3,10}$/
            })}
          />
          {errors.firstName && <p className="text-error">Invalid First Name</p>}
        </Form.Field>
        <Form.Field className="form-field">
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: true,
              minLength: 3,
              maxLength: 10,
              pattern: /^([A-Za-z0-9_-]){3,10}$/
            })}
          />
          {errors.lastName && <p className="text-error">Invalid Last Name</p>}
        </Form.Field>
        <Form.Field className="form-field">
          <label>Phone number</label>
          <input
            placeholder="Phone"
            type="text"
            {...register("phone", {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: /^([0-9_-]){10}$/
            })}
          />
          {errors.phone && <p className="text-error">Invalid Phone number</p>}
        </Form.Field>
        <Form.Field className="form-field">
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p className="text-error">Invalid Email</p>}
        </Form.Field>
        <Form.Field className="form-field">
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,  // one Capital Letter, one Small Letter, and the number and lenght of characters should be between 6 to 15
            })}
          />
          {errors.password && <p className="text-error">Invalid Password</p>}
        </Form.Field>
        <Button type="submit" className="btn-submit">
          Submit
        </Button>
      </Form>
      {/* <h3>Form is verified</h3> */}
    </div>
  );
}; 

export default FormValidation;
