import React from "react";
import { useForm } from "react-hook-form";

function ContactForm(props) {
  const { register, handleSubmit } = useForm();

  const onSubmitData = (data) => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className="ls-side-detail form">
      <h3>Contact data</h3>
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="form-input"
      />
      <input
        {...register("firstName")}
        placeholder="First name"
        className="form-input input-name"
      />
      <input
        {...register("lastName")}
        placeholder="Last name"
        className="form-input input-lastname"
      />
      <input
        {...register("phoneNumber")}
        placeholder="Phone number"
        type="number"
        className="form-input"
      />
      <button type="submit" value="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
