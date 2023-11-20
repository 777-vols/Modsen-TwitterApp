import { FC, memo, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Select, { StylesConfig } from 'react-select';

import ErrorNotification from '@/components/ErrorNotification';
import { allImages } from '@/constants/allImages';
import { formPatterns, minMaxLineLength } from '@/constants/formConstants';
import { updateUserDataHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';
import { IUser } from '@/pages/Profile/types';
import {
  Button,
  Error,
  EyeImage,
  Form,
  Header,
  Input,
  InputWrapper,
  ShowHidePassowrd
} from '@/pages/SignUp/styled';
import { IOption } from '@/pages/SignUp/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import { Background, CloseButton, GenderHeader, GenderSelectWrapper, Window } from './styled';
import { IProps, IUserFormData } from './types';

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    minHeight: '60px'
  })
};

const { eyePasswordHide, eyePasswordOpen } = allImages;

const { minLineLength, maxLineLength } = minMaxLineLength;
const { namePattern, phoneNumberPattern, passwordPattern, emailPattern, telegramPattern } =
  formPatterns;

const {
  header,
  genderHeader,
  placeholders,
  buttonText,
  successNotificationText,
  errorMessages,
  genderOptionsArray
} = config;
const {
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  passwordPlaceholder,
  telegramPlaceholder
} = placeholders;
const { nameError, phoneNumberError, emailError, passwordError, telegramError } = errorMessages;

const EditProfileModal: FC<IProps> = ({ handleCloseModal }) => {
  const currentUser = useSelector(userSelector) as IUser;
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const { setSuccessNotification } = useAction();

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors }
  } = useForm<IUserFormData>({ mode: 'onChange' });

  const {
    field: { value: genderValue, onChange: genderOnChange, ...restGenderField }
  } = useController({ name: 'gender', control, defaultValue: genderOptionsArray[0].value });

  const { id: userId } = currentUser;

  const togglePasswordVisiblity = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const changeGenderValue = (genderOption: unknown) => {
    if (genderOption) {
      genderOnChange(genderOption ? (genderOption as IOption).value : genderOption);
    }
  };

  const handleEditProfile = async (userData: IUserFormData) => {
    if (userData.telegram === '') {
      delete userData.telegram;
    }
    await updateUserDataHelper(userData, userId);
    if (isValid) {
      setSuccessNotification({ message: `${successNotificationText}` });
    }
  };

  return (
    <Background>
      <Window>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <Form onSubmit={handleSubmit(handleEditProfile)}>
          <Header>{header}</Header>
          <InputWrapper>
            {errors?.name && <Error>{errors?.name?.message || nameError}</Error>}
            <Input
              type="text"
              autoComplete="off"
              placeholder={namePlaceholder}
              {...register('name', {
                required: true,
                minLength: minLineLength,
                maxLength: maxLineLength,
                pattern: namePattern
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
          <InputWrapper>
            {errors?.email && <Error>{errors?.email?.message || emailError}</Error>}
            <Input
              type="email"
              autoComplete="current-password"
              placeholder={emailPlaceholder}
              {...register('email', {
                required: true,
                minLength: minLineLength,
                maxLength: maxLineLength,
                pattern: emailPattern
              })}
            />
          </InputWrapper>
          <InputWrapper>
            {errors?.phoneNumber && (
              <Error>{errors?.phoneNumber?.message || phoneNumberError}</Error>
            )}
            <Input
              type="text"
              placeholder={phonePlaceholder}
              {...register('phoneNumber', {
                required: true,
                minLength: minLineLength,
                maxLength: maxLineLength,
                pattern: phoneNumberPattern
              })}
            />
          </InputWrapper>
          <InputWrapper>
            {errors?.telegram && <Error>{errors?.telegram?.message || telegramError}</Error>}
            <Input
              type="text"
              placeholder={telegramPlaceholder}
              {...register('telegram', {
                minLength: minLineLength,
                maxLength: maxLineLength,
                pattern: telegramPattern
              })}
            />
          </InputWrapper>
          <GenderSelectWrapper>
            <GenderHeader>{genderHeader}</GenderHeader>
            <Select
              styles={customStyles}
              options={genderOptionsArray}
              maxMenuHeight={300}
              menuPlacement="top"
              value={{ value: genderValue, label: genderValue }}
              onChange={changeGenderValue}
              isSearchable={false}
              {...restGenderField}
            />
          </GenderSelectWrapper>
          <Button type="submit">{buttonText}</Button>
        </Form>
      </Window>
      <ErrorNotification />
    </Background>
  );
};

export default memo(EditProfileModal);
