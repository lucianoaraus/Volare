import React from "react";
import { useForm } from "react-hook-form";
import masterCard from "../../assets/master-card.svg";
import {
  normalizeCardNumber,
  normalizeCVC,
} from "../helpers/normalizers/cardInfoNormalizers";
import { totalPrice } from "../helpers/calculation-functions/calculationFunctions";

function PaymentForm(props) {
  const { register, handleSubmit } = useForm();

  const onSubmitData = (data) => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className="ls-side-detail form">
      <b>Email</b>
      <input
        {...register("buyerEmail")}
        placeholder="Email"
        type="email"
        className="form-input"
      />
      <b>Card information</b>
      <div>
        <input
          {...register("cardNumber")}
          placeholder="0000 0000 0000 0000"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          name="cardNumber"
          id="cardNumber"
          onChange={(event) => {
            const { value } = event.target;
            event.target.value = normalizeCardNumber(value);
          }}
          className="form-input"
        />
        <img src={masterCard} className="master-card-logo" alt="mastercard" />
      </div>

      <div className="card-information">
        <input
          {...register("dueDate")}
          placeholder="MM/YY"
          type="tel"
          className="form-input input-date"
        />
        <input
          {...register("cvc")}
          placeholder="CVC"
          type="number"
          className="form-input input-cvc"
          onChange={(event) => {
            const { value } = event.target;
            event.target.value = normalizeCVC(value);
          }}
        />
      </div>

      <b>Name on card</b>
      <input
        {...register("cardName")}
        placeholder="Name"
        className="form-input"
      />
      <button type="submit" value="submit" className="submit-button">
        Pay ${totalPrice(props.data)}
      </button>
    </form>
  );
}

export default PaymentForm;
