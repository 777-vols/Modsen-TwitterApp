import { FC, memo, useState } from 'react';
import { useForm } from 'react-hook-form';

import ErrorNotification from '@/components/ErrorNotification';
import { allImages } from '@/constants/allImages';
import { formPatterns, minMaxLineLength } from '@/constants/formConstants';
import { Urls } from '@/constants/urls';
import { logInHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';
import { Logo, TextLink } from '@/pages/Root/styled';
import {
  Button,
  Error,
  EyeImage,
  Input,
  InputWrapper,
  LogoWrapper,
  ShowHidePassowrd
} from '@/pages/SignUp/styled';

import { config } from './config';
import { Form, Header, LinkWrapper, Wrapper } from './styled';
import { IFormProps } from './types';

const { header, emailPlaceholder, passwordPlaceholder, signUp, logIn } = config;

const { SIGN_UP } = Urls;

const { logoImg, eyePasswordHide, eyePasswordOpen } = allImages;

const { emailError, passwordError } = config.errorMessages;
const { minLineLength, maxLineLength } = minMaxLineLength;
const { passwordPattern } = formPatterns;

const LogIn: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const togglePasswordVisiblity = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const { authenticateUser, setErrorNotification } = useAction();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormProps>({ mode: 'onChange' });

  const handleLogin = async (formData: IFormProps) => {
    await logInHelper(formData, authenticateUser, setErrorNotification, errors);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <LogoWrapper>
          <Logo alt="logo" src={logoImg} />
        </LogoWrapper>
        <Header>{header}</Header>
        <InputWrapper>
          {errors?.email && <Error>{errors?.email?.message || emailError}</Error>}
          <Input
            type="email"
            placeholder={emailPlaceholder}
            {...register('email', {
              required: true,
              minLength: minLineLength,
              maxLength: maxLineLength
            })}
          />
        </InputWrapper>
        <InputWrapper>
          {errors?.password && <Error>{errors?.password?.message || passwordError}</Error>}
          <Input
            type={isPasswordShown ? 'text' : 'password'}
            placeholder={passwordPlaceholder}
            {...register('password', {
              required: true,
              pattern: passwordPattern
            })}
          />
          <ShowHidePassowrd onClick={togglePasswordVisiblity}>
            <EyeImage
              src={isPasswordShown ? eyePasswordHide : eyePasswordOpen}
              alt="eye password"
            />
          </ShowHidePassowrd>
        </InputWrapper>
        <Button type="submit">{logIn}</Button>
        <LinkWrapper>
          <TextLink to={SIGN_UP}>{signUp}</TextLink>
        </LinkWrapper>
      </Form>
      <ErrorNotification />
    </Wrapper>
  );
};

export default memo(LogIn);
