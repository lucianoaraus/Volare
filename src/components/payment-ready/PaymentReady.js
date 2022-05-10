import React from "react";

function PaymentReady(props) {
  const { data } = props;
  const { firstName, lastName, email, phoneNumber, orderId } = data;

  return (
    <>
      <h3>Contact data</h3>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>

      <h3>Order id</h3>
      {orderId ? <p>{orderId}</p> : <p>loading...</p>}
    </>
  );
}

export default PaymentReady;
