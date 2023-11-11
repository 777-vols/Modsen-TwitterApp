import { FC, useMemo, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';

import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import {
  getDaysOptionsArray,
  getMonthOptionsArray,
  getYearsOptionsArray
} from '@/helpers/dateSelectorsHelpers';
import { convertBirthDate, signUpWithEmailHelper } from '@/helpers/userHelper';
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

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    height: '70px',
    minHeight: '70px'
  })
};

const SignUp: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  const daysOptionsArray = useMemo(
    () => getDaysOptionsArray(currentMonth, currentYear),
    [currentMonth, currentYear]
  );
  const yearsOptionsArray = useMemo(() => getYearsOptionsArray(), []);
  const monthsOptionsArray = useMemo(() => getMonthOptionsArray(), []);

  const navigate = useNavigate();

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
    const user: ISighUpWithEmailUser = convertBirthDate(userData);
    await signUpWithEmailHelper(user, isValid, reset);
    navigate('/login');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleSignUpWithEmail)}>
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
              options={monthsOptionsArray}
              maxMenuHeight={300}
              menuPlacement="top"
              value={monthValue ? monthsOptionsArray[currentMonth] : monthValue}
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
    </Wrapper>
  );
};

export default SignUp;
