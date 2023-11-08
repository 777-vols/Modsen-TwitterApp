import { FC } from 'react';

import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { Logo, TextLink } from '@/pages/Home/styled';

import { config } from './config';
import { Button, Form, Header, Input, LinkWrapper, Wrapper } from './styled';

const { header, identify, password, signUp, logIn } = config;

const { SIGN_UP } = Urls;

const { logoImg } = allImages;

const LogIn: FC = () => (
  <Wrapper>
    <Form>
      <Logo alt="logoImg" src={logoImg} />
      <Header>{header}</Header>
      <Input placeholder={identify} />
      <Input placeholder={password} />
      <Button>{logIn}</Button>
      <LinkWrapper>
        <TextLink to={SIGN_UP}>{signUp}</TextLink>
      </LinkWrapper>
    </Form>
  </Wrapper>
);

export default LogIn;
