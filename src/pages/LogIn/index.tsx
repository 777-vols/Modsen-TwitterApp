import { signInWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { FirebaseCollections } from '@/api/firebase/constants';
import { auth } from '@/api/firebase/firebase';
import { getFirebaseDoc } from '@/api/firebase/firebaseData';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { useAction } from '@/hooks/useAction';
import { Logo, TextLink } from '@/pages/Home/styled';

import { ISighUpWithEmailUser } from '../SignUp/types';
import { config } from './config';
import { Button, Form, Header, Input, LinkWrapper, Wrapper } from './styled';
import { IFormProps } from './types';

const { header, loginPlaceholder, passwordPlaceholder, signUp, logIn } = config;

const { SIGN_UP } = Urls;

const { logoImg } = allImages;

const LogIn: FC = () => {
  const { authenticateUser } = useAction();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormProps>({ mode: 'onChange' });

  const handleLogin = async (formData: IFormProps) => {
    const usersCollection = FirebaseCollections.users;
    const { email, password } = formData;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { uid: id } = user;

      const existedUser = (await getFirebaseDoc(usersCollection, id)) as
        | ISighUpWithEmailUser
        | false;

      if (existedUser) {
        authenticateUser(existedUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Logo alt="logoImg" src={logoImg} />
        <Header>{header}</Header>
        <Input
          type="email"
          placeholder={loginPlaceholder}
          {...register('email', {
            required: true
          })}
        />
        <Input
          type="password"
          placeholder={passwordPlaceholder}
          {...register('password', {
            required: true,
            minLength: 5,
            maxLength: 20
          })}
        />
        <Button type="submit">{logIn}</Button>
        <LinkWrapper>
          <TextLink to={SIGN_UP}>{signUp}</TextLink>
        </LinkWrapper>
      </Form>
    </Wrapper>
  );
};

export default LogIn;
