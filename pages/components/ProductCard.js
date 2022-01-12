import React from 'react';
import { Layout,Card, Tag,Stack, TextField, Button } from '@shopify/polaris';

const ProductCard = (props) => {
  return (
    <Layout.Section oneHalf>
      <Card title={props.name}>
        <Card.Section>
          <Stack>
            <img className="product-img" src="https://cache.mrporter.com/variants/images/31432202865751898/in/w1200_q60.jpg" alt="not founded" />
            <div>
            <p>Description:</p>
            <p>Price:{}¥</p>
            </div>

          </Stack>
        </Card.Section>

        <Card.Section>
          <Stack>
            <Tag  onRemove={()=>console.log("Heloo")}>Test</Tag>
            <Tag  onRemove={()=>console.log("Good")}>Good</Tag>
          </Stack>
        </Card.Section>


        <Card.Section>
          <Stack distribution="equalSpacing">
            <TextField/>
            <Button primary>Add Tag</Button>
          </Stack>
        </Card.Section>
      </Card>
    </Layout.Section>
  )
}

export default ProductCard;
