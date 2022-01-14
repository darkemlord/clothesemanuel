import React from 'react';
import {Page,Layout} from "@shopify/polaris";
import ProductCard from "./components/ProductCard";

const localProducts = [
  {
    name: 'T-Shirt',
    price: '200',
    img: 'https://cache.mrporter.com/variants/images/31432202865751898/in/w1200_q60.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, minima.'
  },
  {
    name: 'Black T-Shirt',
    price: '300',
    img: 'https://cache.mrporter.com/variants/images/13452677152170858/in/w1200_q60.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, minima.'
  },
  {
    name: 'Red T-Shirt',
    price: '500',
    img: 'https://cdn.shopify.com/s/files/1/1847/9183/products/direct_uploads_2F6755_2FnSSloal-J3D03_JmH0J9Eg_2FKids-Atelier-DSquared-White-Vertical-Logo-T-dq03w6d00w5dq411-Red-Photo-2_1800x1800.jpg?v=1631252593',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, minima.'
  },
    {
    name: 'Colombia T-Shirt',
    price: '300',
    img: 'https://www.studioflauren.com/images/product/medium/17285.jpg',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, minima.'
  },
]


const Products = () => {
  return (
    <Page title="Product Tags">
      <Layout>
        {localProducts.map((product, index )=>(
          <ProductCard key={index} name={product.name} image={product.img} price={product.price} description={product.description}/>
        ))}
      </Layout>
    </Page>
  )
}

export default Products;
