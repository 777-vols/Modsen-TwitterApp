import { FC } from 'react';
import { useController, useForm } from 'react-hook-form';
import Select, { StylesConfig } from 'react-select';

import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { convertBirthDate, signUpWithEmailHelper } from '@/helpers/userHelper';
import { useAction } from '@/hooks/useAction';
import { Logo, TextLink } from '@/pages/Home/styled';
import { Button, Input, Wrapper } from '@/pages/LogIn/styled';

import { config } from './config';
import {
  BirthDateHeader,
  DaySelect,
  Form,
  Header,
  LogoWrapper,
  MonthSelect,
  SelectBlock,
  SelectWrapper,
  Text,
  YearSelect
} from './styled';
import { IOption, ISighUpWithEmailUser, IUserFormData } from './types';

const { header, placeholders, useEmail, dateOfBirth, text, buttonText } = config;
const { namePlaceholder, phonePlaceholder, emailPlaceholder, passwordPlaceholder } = placeholders;

const { HOME } = Urls;

const { logoImg } = allImages;

const monthOptionsArr = [
  { value: '0', label: 'January' },
  { value: '1', label: 'February' },
  { value: '2', label: 'March' },
  { value: '3', label: 'April' },
  { value: '4 ', label: 'May' }
];
const yearOptionsArr = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
  { value: '2025', label: '2025' }
];
const dayOptionsArr = [
  { value: '1', label: '1' },
  { value: '2', label: '3' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
];

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    height: '70px',
    minHeight: '70px'
  })
};

const SignUp: FC = () => {
  const { authenticateUser } = useAction();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isValid, errors }
  } = useForm<IUserFormData>({ mode: 'onChange' });

  const onSubmitHandler = async (userData: IUserFormData) => {
    const user: ISighUpWithEmailUser = convertBirthDate(userData);
    await signUpWithEmailHelper(user, authenticateUser, isValid, reset);
  };

  const {
    field: { value: monthValue, onChange: monthOnChange, ...restMonthField }
  } = useController({ name: 'month', control, defaultValue: monthOptionsArr[0].value });
  const {
    field: { value: yearValue, onChange: yearOnChange, ...restYearField }
  } = useController({ name: 'year', control, defaultValue: yearOptionsArr[0].value });
  const {
    field: { value: dayValue, onChange: dayOnChange, ...restDayField }
  } = useController({ name: 'day', control, defaultValue: dayOptionsArr[0].value });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <LogoWrapper>
          <Logo alt="logoImg" src={logoImg} />
        </LogoWrapper>
        <Header>{header}</Header>
        <Input
          type="text"
          placeholder={namePlaceholder}
          {...register('name', {
            required: true
          })}
        />
        <Input
          type="text"
          placeholder={phonePlaceholder}
          {...register('phoneNumber', {
            required: true
          })}
        />
        <Input
          type="email"
          placeholder={emailPlaceholder}
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
        <TextLink to={HOME}>{useEmail}</TextLink>
        <BirthDateHeader>{dateOfBirth}</BirthDateHeader>
        <Text>{text}</Text>

        <SelectBlock>
          <MonthSelect>
            <Select
              styles={customStyles}
              options={monthOptionsArr}
              value={
                monthValue
                  ? monthOptionsArr.find((month) => month.value === monthValue)
                  : monthValue
              }
              onChange={(option) => monthOnChange(option ? (option as IOption).value : option)}
              isSearchable={false}
              {...restMonthField}
            />
          </MonthSelect>
          <SelectWrapper>
            <DaySelect>
              <Select
                styles={customStyles}
                options={dayOptionsArr}
                value={dayValue ? dayOptionsArr.find((day) => day.value === dayValue) : dayValue}
                onChange={(option) => dayOnChange(option ? (option as IOption).value : option)}
                isSearchable={false}
                {...restDayField}
              />
            </DaySelect>
            <YearSelect>
              <Select
                styles={customStyles}
                options={yearOptionsArr}
                value={
                  yearValue ? yearOptionsArr.find((year) => year.value === yearValue) : yearValue
                }
                onChange={(option) => yearOnChange(option ? (option as IOption).value : option)}
                isSearchable={false}
                {...restYearField}
              />
            </YearSelect>
          </SelectWrapper>
        </SelectBlock>
        <Button type="submit">{buttonText}</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
