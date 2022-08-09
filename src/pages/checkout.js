import React from "react";
import Checkout from "../components/Checkout";
import Layout from "../components/Layout";
import HappyClientSectionComponent from "../components/HappyClientSectionComponent";

const CheckoutPage = () => {
  return (
    <Layout>
      <Checkout />
      <HappyClientSectionComponent />
    </Layout>
  );
};

export default CheckoutPage;
