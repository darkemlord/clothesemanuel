import React from 'react'

const NavigationBar = () => {
  return (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/path/to/place',
          label: 'Home',
          icon: HomeMajor,
        },
        {
          url: '/path/to/place',
          label: 'Products',
          icon: ProductsMajor,
        },
      ]}
    />
  </Navigation>
  )
}

export default NavigationBar;
