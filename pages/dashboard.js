import React from "react";
import { Page, EmptyState } from "@shopify/polaris";

export const Dashboard = () => {
  return (
    <Page>
      <EmptyState>
        <h1>Hello there! Thank you for visiting!</h1>
      </EmptyState>
    </Page>
  );
};

export default Dashboard;
