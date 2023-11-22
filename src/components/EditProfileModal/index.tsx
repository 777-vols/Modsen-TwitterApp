import { FC, memo, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Select, { StylesConfig } from 'react-select';

import { CloseButton } from '@/components/AddTweetModal/styled';
import Notification from '@/components/Notification';
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
import { Background, GenderSelectWrapper, Window } from './styled';
import { IEditUserFormData, IProps } from './types';

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    minHeight: '60px'
  })
};

const { eyePasswordHide, eyePasswordOpen } = allImages;

const { minLineLength, maxLineLength } = minMaxLineLength;
const { namePattern, phoneNumberPattern, passwordPattern, telegramPattern } = formPatterns;

const {
  header,
  placeholders,
  buttonText,
  successNotificationText,
  errorMessages,
  genderOptionsArray
} = config;
const { namePlaceholder, phonePlaceholder, passwordPlaceholder, telegramPlaceholder } =
  placeholders;
const { nameError, phoneNumberError, passwordError, telegramError } = errorMessages;

const EditProfileModal: FC<IProps> = ({ handleCloseModal }) => {
  const currentUser = useSelector(userSelector) as IUser;
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const { setSuccessNotification, updateUserData } = useAction();

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors }
  } = useForm<IEditUserFormData>({ mode: 'onChange' });

  const {
    field: { value: genderValue, onChange: genderOnChange, ...restGenderField }
  } = useController({ name: 'gender', control, defaultValue: genderOptionsArray[0].value });

  const { id: userId, name, password, phoneNumber, telegram } = currentUser;

  const togglePasswordVisiblity = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const changeGenderValue = (genderOption: unknown) => {
    if (genderOption) {
      genderOnChange(genderOption ? (genderOption as IOption).value : genderOption);
    }
  };

  const handleEditProfile = async (userData: IEditUserFormData) => {
    Object.keys(userData).forEach((key) => {
      if (userData[key as keyof IEditUserFormData] === '') {
        delete userData[key as keyof IEditUserFormData];
      }
    });

    if (isValid) {
      await updateUserDataHelper(userData, userId);
      updateUserData(userData);
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
              defaultValue={name || ''}
              placeholder={namePlaceholder}
              {...register('name', {
                required: true,
                minLength: minLineLength,
                maxLength: maxLineLength,
                pattern: namePattern
              })}
            />
          </InputWrapper>
          {password && (
            <InputWrapper>
              {errors?.password && <Error>{errors?.password?.message || passwordError}</Error>}
              <Input
                type={isPasswordShown ? 'text' : 'password'}
                defaultValue={password || ''}
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
          )}
          <InputWrapper>
            {errors?.phoneNumber && (
              <Error>{errors?.phoneNumber?.message || phoneNumberError}</Error>
            )}
            <Input
              type="text"
              defaultValue={phoneNumber || ''}
              placeholder={phonePlaceholder}
              {...register('phoneNumber', {
                pattern: phoneNumberPattern
              })}
            />
          </InputWrapper>
          <InputWrapper>
            {errors?.telegram && <Error>{errors?.telegram?.message || telegramError}</Error>}
            <Input
              type="text"
              defaultValue={telegram || ''}
              placeholder={telegramPlaceholder}
              {...register('telegram', {
                pattern: telegramPattern
              })}
            />
          </InputWrapper>
          <GenderSelectWrapper>
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
      <Notification />
    </Background>
  );
};

export default memo(EditProfileModal);
