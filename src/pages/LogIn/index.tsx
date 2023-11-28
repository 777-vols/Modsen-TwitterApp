import { FC, memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Background } from '@/components/EditProfileModal/styled';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
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
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';

import { config } from './config';
import { Form, LinkWrapper, Title, Wrapper } from './styled';
import { ILoginFormData } from './types';

const { header, emailPlaceholder, passwordPlaceholder, signUp, logIn, errorMessage } = config;

const { SIGN_UP } = Urls;

const { logoImg, eyePasswordHide, eyePasswordOpen } = allImages;

const { emailError, passwordError } = config.errorMessages;
const { minLineLength, maxLineLength } = minMaxLineLength;
const { passwordPattern } = formPatterns;

const LogIn: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const isLoading = useSelector(isLoadingSelector) as boolean;
  const { authenticateUser, setErrorNotification, setIsLoading } = useAction();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<ILoginFormData>({ mode: 'onChange' });

  const togglePasswordVisiblity = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const handleLogin = async (formData: ILoginFormData) => {
    try {
      if (isValid) {
        setIsLoading(true);
        await logInHelper(formData, authenticateUser);
      }
    } catch (error) {
      setErrorNotification({
        message: errorMessage
      });
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Background>
      <Loader />
    </Background>
  ) : (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <LogoWrapper>
          <Logo alt="logo" src={logoImg} />
        </LogoWrapper>
        <Title>{header}</Title>
        <InputWrapper>
          {errors?.email && <Error>{errors?.email?.message || emailError}</Error>}
          <Input
            type="email"
            autoComplete="off"
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
            autoComplete="current-password"
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
      <Notification />
    </Wrapper>
  );
};

export default memo(LogIn);
