import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MdcBKBuEeRvR0rvXmX46ydoMD4IJ6xqUKkXMyGw1BxM1WyQ3DbkO0mcHQwf2ode6FxPjspD1Xw52sDK3YAr9Xmy00EHZV376N";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
