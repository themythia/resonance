import React from 'react';

import {
  HeaderContainer,
  SearchInputs,
  Input,
} from '../../../styled/SearchBar';

const SearchBar = (placeholder) => {
  return (
    <HeaderContainer>
      <SearchInputs>
        <Input type='text' placeholder={placeholder} />
      </SearchInputs>
    </HeaderContainer>
  );
};

export default SearchBar;
