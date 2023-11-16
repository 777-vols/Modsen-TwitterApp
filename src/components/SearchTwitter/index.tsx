import { FC } from 'react';

import { allImages } from '@/constants/allImages';

import { Image, Input, InputWrapper, Wrapper } from './styled';

const { searchIcon } = allImages;

const SearchTwitter: FC = () => (
  <Wrapper>
    <InputWrapper>
      <Image src={searchIcon} alt="searchIcon" />
      <Input placeholder="Search Twitter" />
    </InputWrapper>
  </Wrapper>
);

export default SearchTwitter;
