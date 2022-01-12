import React from 'react';
import {Page,Layout} from "@shopify/polaris";
import ProductCard from "./components/ProductCard";

const products = [
  {
    name: 'T-Shirt',
    price: '200',
    img: 'https://cache.mrporter.com/variants/images/31432202865751898/in/w1200_q60.jpg'
  },
  {
    name: 'Black T-Shirt',
    price: '300',
    img: 'https://cache.mrporter.com/variants/images/31432202865751898/in/w1200_q60.jpg'
  },
]
const Products = () => {
  return (
    <Page title="Product Tags">
      <Layout>
        {products.map(product =>(
          <ProductCard name={product.name} />
        ))}
      </Layout>
    </Page>
  )
}

export default Products;
