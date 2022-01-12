import React from 'react';
import { Layout,Card, Tag,Stack, TextField, Button } from '@shopify/polaris';

const ProductCard = () => {
  return (
    <Layout.Section oneHalf>
      <Card title="Product Name">
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
