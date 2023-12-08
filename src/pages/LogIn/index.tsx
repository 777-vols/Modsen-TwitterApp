import { FC, memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { Background } from '@/components/EditProfileModal/styled';
import { Loader } from '@/components/Loader';
import Notification from '@/components/Notification';
import PublicPagesLogo from '@/components/PublicPagesLogo';
import { allImages, formPatterns, minMaxLineLength, Urls } from '@/constants';
import { logInHelper } from '@/helpers';
import { useAction } from '@/hooks/useAction';
import { TextLink } from '@/pages/Root/styled';
import {
  Button,
  Error,
  EyeImage,
  Input,
  InputWrapper,
  ShowHidePassowrd
} from '@/pages/SignUp/styled';
import { isLoadingSelector } from '@/store/slices/notificationSlice/selectors';

import { config } from './config';
import { Form, LinkWrapper, Title, Wrapper } from './styled';
import { ILoginFormData } from './types';

const { header, emailPlaceholder, passwordPlaceholder, signUp, logIn, errorMessage } = config;

const { SIGN_UP } = Urls;

const { eyePasswordHide, eyePasswordOpen } = allImages;

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
        <PublicPagesLogo />
        <Title>{header}</Title>
        <InputWrapper>
          {errors?.email && <Error>{errors?.email?.message || emailError}</Error>}
          <Input
            data-cy="emailInput"
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
            data-cy="passwordInput"
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
        <Button data-cy="logInButton" type="submit">
          {logIn}
        </Button>
        <LinkWrapper>
          <TextLink to={SIGN_UP}>{signUp}</TextLink>
        </LinkWrapper>
      </Form>
      <Notification />
    </Wrapper>
  );
};

export default memo(LogIn);
