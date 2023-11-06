import { FC } from 'react';

import logoImg from '@/assets/twitterLogo.svg';
import { Urls } from '@/constants/urls';
import { Logo, TextLink } from '@/pages/Home/styled';

import { config } from './config';
import { Button, Form, Header, Input, LinkWrapper, Wrapper } from './styled';

const { header, identify, password, signUp, logIn } = config;

const LogIn: FC = () => (
  <Wrapper>
    <Form>
      <Logo alt="logoImg" src={logoImg} />
      <Header>{header}</Header>
      <Input placeholder={identify} />
      <Input placeholder={password} />
      <Button>{logIn}</Button>
      <LinkWrapper>
        <TextLink to={Urls.SIGN_UP}>{signUp}</TextLink>
      </LinkWrapper>
    </Form>
  </Wrapper>
);

export default LogIn;
