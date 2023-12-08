import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { allImages } from '@/constants';

import { Wrapper } from './styled';

const { logoImg } = allImages;

const PublicPagesLogo: FC = () => (
  <Wrapper>
    <LazyLoadImage
      src={logoImg}
      effect="blur"
      alt="logo"
      width="100%"
      style={{ maxHeight: '100%' }}
    />
  </Wrapper>
);

export default PublicPagesLogo;
