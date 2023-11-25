import { FC, memo, useMemo, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import Notification from '@/components/Notification';
import { allImages } from '@/constants/allImages';
import { formPatterns, minMaxLineLength } from '@/constants/formConstants';
import { Urls } from '@/constants/urls';
import {
  allMonthsNames,
  getDaysOptionsArray,
  getMonthOptionsArray,
  getYearsOptionsArray
} from '@/helpers/dateSelectorsHelpers';
import { convertBirthDate, signUpWithEmailHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';
import { Wrapper } from '@/pages/LogIn/styled';
import { Logo, TextLink } from '@/pages/Root/styled';

import { config, customStyles } from './config';
import {
  BirthDateHeader,
  Button,
  DaySelect,
  Error,
  EyeImage,
  Form,
  Header,
  Input,
  InputWrapper,
  LogoWrapper,
  MonthSelect,
  SelectBlock,
  SelectWrapper,
  ShowHidePassowrd,
  Text,
  YearSelect
} from './styled';
import { IOption, ISighUpWithEmailUser, IUserFormData } from './types';

const {
  header,
  placeholders,
  emailUse,
  dateOfBirth,
  text,
  buttonText,
  errorMessages,
  successNotificationText
} = config;
const { namePlaceholder, phonePlaceholder, emailPlaceholder, passwordPlaceholder } = placeholders;
const { nameError, phoneNumberError, emailError, passwordError } = errorMessages;

const { HOME, LOG_IN } = Urls;

const { logoImg, eyePasswordHide, eyePasswordOpen } = allImages;

const { minLineLength, maxLineLength } = minMaxLineLength;
const { namePattern, phoneNumberPattern, passwordPattern, emailPattern } = formPatterns;

const SignUp: FC = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  const daysOptionsArray = useMemo(
    () => getDaysOptionsArray(currentMonth, currentYear),
    [currentMonth, currentYear]
  );
  const yearsOptionsArray = useMemo(() => getYearsOptionsArray(), []);
  const monthsOptionsArray = useMemo(() => getMonthOptionsArray(), []);
  const navigate = useNavigate();

  const { setErrorNotification, setSuccessNotification } = useAction();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors }
  } = useForm<IUserFormData>({ mode: 'onChange' });

  const {
    field: { value: monthValue, onChange: monthOnChange, ...restMonthField }
  } = useController({ name: 'month', control, defaultValue: monthsOptionsArray[0].value });
  const {
    field: { value: yearValue, onChange: yearOnChange, ...restYearField }
  } = useController({ name: 'year', control, defaultValue: yearsOptionsArray[0].value });
  const {
    field: { value: dayValue, onChange: dayOnChange, ...restDayField }
  } = useController({ name: 'day', control, defaultValue: daysOptionsArray[0].value });

  const togglePasswordVisiblity = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const changeCurrentMonth = (monthOption: unknown) => {
    if (monthOption) {
      setCurrentMonth(Number((monthOption as IOption).value));
      monthOnChange(monthOption ? (monthOption as IOption).value : monthOption);
    }
  };

  const changeCurrentYear = (yearOption: unknown) => {
    if (yearOption) {
      setCurrentYear(Number((yearOption as IOption).value));
      yearOnChange(yearOption ? (yearOption as IOption).value : yearOption);
    }
  };

  const changeCurrentDay = (dayOption: unknown) => {
    if (dayOption) {
      dayOnChange(dayOption ? (dayOption as IOption).value : dayOption);
    }
  };

  const handleSignUpWithEmail = async (userData: IUserFormData) => {
    if (isValid) {
      const user: ISighUpWithEmailUser = convertBirthDate(userData);
      await signUpWithEmailHelper(user, errors, setErrorNotification);
      navigate(LOG_IN);
      reset();
      setSuccessNotification({ message: `${successNotificationText}` });
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleSignUpWithEmail)}>
        <LogoWrapper>
          <Logo alt="logo" src={logoImg} />
        </LogoWrapper>
        <Header>{header}</Header>
        <InputWrapper>
          {errors?.name && <Error>{errors?.name?.message || nameError}</Error>}
          <Input
            type="text"
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
          {errors?.phoneNumber && <Error>{errors?.phoneNumber?.message || phoneNumberError}</Error>}
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
        <TextLink to={HOME}>{emailUse}</TextLink>
        <BirthDateHeader>{dateOfBirth}</BirthDateHeader>
        <Text>{text}</Text>

        <SelectBlock>
          <MonthSelect>
            <Select
              styles={customStyles}
              options={monthsOptionsArray}
              maxMenuHeight={300}
              menuPlacement="top"
              value={{ value: monthValue, label: allMonthsNames[currentMonth] }}
              onChange={changeCurrentMonth}
              isSearchable={false}
              {...restMonthField}
            />
          </MonthSelect>
          <SelectWrapper>
            <DaySelect>
              <Select
                styles={customStyles}
                options={daysOptionsArray}
                maxMenuHeight={300}
                menuPlacement="top"
                value={{ value: dayValue, label: dayValue }}
                onChange={changeCurrentDay}
                isSearchable={false}
                {...restDayField}
              />
            </DaySelect>
            <YearSelect>
              <Select
                styles={customStyles}
                options={yearsOptionsArray}
                maxMenuHeight={300}
                menuPlacement="top"
                value={{ value: yearValue, label: yearValue }}
                onChange={changeCurrentYear}
                isSearchable={false}
                {...restYearField}
              />
            </YearSelect>
          </SelectWrapper>
        </SelectBlock>
        <Button type="submit">{buttonText}</Button>
      </Form>
      <Notification />
    </Wrapper>
  );
};

export default memo(SignUp);
