import { FC, memo, useRef, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import { CloseButton } from '@/components/DeleteTweetModal/styled';
import Notification from '@/components/Notification';
import { allImages } from '@/constants/allImages';
import { formPatterns, minMaxLineLength } from '@/constants/formConstants';
import { updateUserDataHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { IUser } from '@/pages/Profile/types';
import { customStyles } from '@/pages/SignUp/config';
import {
  Button,
  Error,
  EyeImage,
  Form,
  Input,
  InputWrapper,
  PasswordError,
  PasswordWrapper,
  ShowHidePassowrd,
  Title
} from '@/pages/SignUp/styled';
import { IOption } from '@/pages/SignUp/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { config } from './config';
import { Background, GenderSelectWrapper, Window } from './styled';
import { IEditUserFormData, IProps } from './types';

const { eyePasswordHide, eyePasswordOpen } = allImages;

const { minLineLength, maxLineLength } = minMaxLineLength;
const { namePattern, phoneNumberPattern, passwordPattern, telegramPattern } = formPatterns;

const {
  header,
  placeholders,
  buttonText,
  successNotificationText,
  errorNotificationText,
  errorMessages,
  genderOptionsArray
} = config;
const { namePlaceholder, phonePlaceholder, passwordPlaceholder, telegramPlaceholder } =
  placeholders;
const { nameError, phoneNumberError, passwordError, telegramError } = errorMessages;

const EditProfileModal: FC<IProps> = ({ handleCloseModal }) => {
  const currentUser = useSelector(userSelector) as IUser;
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const { setSuccessNotification, setErrorNotification, updateUserData, setIsLoading } =
    useAction();
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    handleCloseModal();
  });

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
    const keys = Object.keys(userData) as (keyof typeof userData)[];

    keys.forEach((key) => {
      if (!userData[key]) {
        delete userData[key];
      }
    });

    if (isValid) {
      try {
        setIsLoading(true);
        await updateUserDataHelper(userData, userId);
        updateUserData(userData);
        setSuccessNotification({ message: `${successNotificationText}` });
        handleCloseModal();
      } catch (error) {
        setErrorNotification({
          message: errorNotificationText
        });
      }
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <Window ref={modalRef}>
        <CloseButton onClick={handleCloseModal}>X</CloseButton>
        <Form onSubmit={handleSubmit(handleEditProfile)}>
          <Title>{header}</Title>
          <InputWrapper>
            {errors?.name && <Error>{errors?.name?.message || nameError}</Error>}
            <Input
              data-cy="editName"
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
            <PasswordWrapper>
              {errors?.password && (
                <PasswordError>{errors?.password?.message || passwordError}</PasswordError>
              )}
              <Input
                type={isPasswordShown ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder={passwordPlaceholder}
                {...register('password', {
                  pattern: passwordPattern
                })}
              />
              <ShowHidePassowrd onClick={togglePasswordVisiblity}>
                <EyeImage
                  src={isPasswordShown ? eyePasswordHide : eyePasswordOpen}
                  alt="eye password"
                />
              </ShowHidePassowrd>
            </PasswordWrapper>
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
          <Button data-cy="saveProfileChanges" type="submit">
            {buttonText}
          </Button>
        </Form>
      </Window>
      <Notification />
    </Background>
  );
};

export default memo(EditProfileModal);
