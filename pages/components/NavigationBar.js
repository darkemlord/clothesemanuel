import React from 'react';
import { Navigation } from '@shopify/polaris'

const NavigationBar = () => {
  return (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/',
          label: 'Home',
        },
        {
          url: '/',
          label: 'Products',
        },
      ]}
    />
  </Navigation>
  )
}

export default NavigationBar;
