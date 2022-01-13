import React, {useState, useCallback} from 'react';
import { TopBar, ActionList} from '@shopify/polaris'

const NavigationBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue('');
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const searchResultsMarkup = (
    <ActionList
      items={[{content: 'Shopify help center'}, {content: 'Community forums'}]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
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
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  )
}

export default NavigationBar;
