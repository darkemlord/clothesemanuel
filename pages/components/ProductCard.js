import  React, { useState, useCallback } from 'react';
import { Layout,Card, Stack, TextField, Button } from '@shopify/polaris';

const ProductCard = (props) => {

  const [value, setValue] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const handleButton = () => setNewPrice(value)

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
                      type="number"
                      onChange={handleChange}
                      autoComplete="off"
                  />
                  <Button primary onClick={handleButton}>update price</Button>
                </Stack>
              </Stack>
            </div>
          </Stack>
        </Card.Section>
      </Card>
    </Layout.Section>
  )
}

export default ProductCard;
