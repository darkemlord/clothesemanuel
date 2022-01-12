import React from 'react';
import {Page,Layout} from "@shopify/polaris";
import ProductCard from "./components/ProductCard";

export const Dashboard = () => {
  return (
  <Page title="Product Tags">
    <Layout>
      <ProductCard />
      <ProductCard />
    </Layout>
  </Page>
  )
}

export default Dashboard;
