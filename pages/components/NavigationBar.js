import React, {useState, useCallback} from 'react';
import { TopBar} from '@shopify/polaris'

const NavigationBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{content: 'Back to Shopify'}],
        },
        {
          items: [{content: 'Community forums'}],
        },
      ]}
      name="Emanuel"
      detail="Admin"
      initials="E"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );
  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
    />
  )
}

export default NavigationBar;
