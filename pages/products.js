import React from 'react';
import {Page,Layout} from "@shopify/polaris";
import ProductCard from "./components/ProductCard";
import localProducts from './utils/localProducts';

const Products = () => {
  return (
    <Page title="Product Tags">
      <Layout>
        {localProducts.map(product =>(
          <ProductCard name={product.name} image={product.img} price={product.price} />
        ))}
      </Layout>
    </Page>
  )
}

export default Products;
