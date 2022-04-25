import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 4,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    //console.log("form completado desde modal padre: ", e); //JSON: form data -> TODO: Mandar a Firebase
    setFormData(e);
  };

  return (
    <div>
      <button onClick={handleOpen} className="item-detail-button">
        Purchase All
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2>User data:</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              First Name:
              <input {...register("firstName")} />
            </label>
            <label>
              Last Name:
              <input {...register("lastName")} />
            </label>
            <label>
              Email:
              <input {...register("email")} type="email" />
            </label>
            <label>
              Phone number:
              <input {...register("phoneNumber")} type="number" />
            </label>

            <ChildModal formData={formData !== undefined && formData} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const { formData } = props;
  const { firstName, lastName, email, phoneNumber } = formData;

  // TODO: optimizar la cantidad de veces que se renderiza el componente
  /* console.log(
    "Props des-desestructurado: ",
    firstName,
    lastName,
    email,
    phoneNumber
  ); */

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button
        onClick={handleOpen}
        className="item-detail-button"
        type="submit"
        value="submit"
      >
        Send contact data
      </button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2>Successfully purchased!</h2>
          <h3>Your Purchase Resume:</h3>

          <p>
            <b>Order ID:</b> 123e123e12ed12d12d
          </p>

          <h3>Booking Description:</h3>

          <h3>Your contact data:</h3>
          <p>
            <b>First Name:</b> {firstName}
          </p>
          <p>
            <b>Last Name:</b> {lastName}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Phone Number:</b> {phoneNumber}
          </p>

          <button onClick={handleClose} className="item-detail-button">
            Confirm purchase
          </button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
