import  React, { useState, useCallback } from 'react';
import { Layout,Card, Tag,Stack, TextField, Button } from '@shopify/polaris';

const ProductCard = (props) => {
  const [value, setValue] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <Layout.Section oneHalf>
      <Card title={props.name}>
        <Card.Section>
          <Stack>
            <img className="product-img" src={props.image} />
            <div>
              <Stack vertical={true}>
                <p>Description: {props.description}</p>
                <p>Price: {newPrice ? newPrice : props.price}¥</p>
                <Stack>
                  <TextField
                      value={value}
                      onChange={handleChange}
                      autoComplete="off"
                  />
                  <Button primary>update price</Button>
                </Stack>
              </Stack>
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
          <Stack>
            <TextField/>
            <Button primary>Add Tag</Button>
          </Stack>
        </Card.Section>
      </Card>
    </Layout.Section>
  )
}

export default ProductCard;
