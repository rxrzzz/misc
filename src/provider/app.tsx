import React from "react";
import { StateContextProvider } from "src/context/countContext";
import { BrowserRouter as Router } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Footer } from "src/components";
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID!,
      }}
    >
      <StateContextProvider>
        <Router>
          <>{children}</>
          <Footer />
        </Router>
      </StateContextProvider>
    </PayPalScriptProvider>
  );
};