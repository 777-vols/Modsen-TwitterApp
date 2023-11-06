import { FC } from 'react';
import ReactSelect, { StylesConfig } from 'react-select';

import logoImg from '@/assets/twitterLogo.svg';
import { Urls } from '@/constants/urls';
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

const { header, inputsPlaceholders, useEmail, dateOfBirth, text, buttonText } = config;

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    height: '70px',
    'min-height': '70px'
  })
};

const SignUp: FC = () => (
  <Wrapper>
    <Form>
      <LogoWrapper>
        <Logo alt="logoImg" src={logoImg} />
      </LogoWrapper>
      <Header>{header}</Header>
      {inputsPlaceholders.map((placeholderName) => (
        <Input key={placeholderName} placeholder={placeholderName} />
      ))}
      <TextLink to={Urls.HOME}>{useEmail}</TextLink>
      <BirthDateHeader>{dateOfBirth}</BirthDateHeader>
      <Text>{text}</Text>
      <SelectBlock>
        <MonthSelect>
          <ReactSelect
            styles={customStyles}
            maxMenuHeight={200}
            defaultValue={{ value: 'Month', label: 'Month' }}
            isSearchable={false}
          />
        </MonthSelect>
        <SelectWrapper>
          <DaySelect>
            <ReactSelect
              styles={customStyles}
              maxMenuHeight={200}
              defaultValue={{ value: 'Day', label: 'Day' }}
              isSearchable={false}
            />
          </DaySelect>
          <YearSelect>
            <ReactSelect
              styles={customStyles}
              maxMenuHeight={200}
              defaultValue={{ value: 'Year', label: 'Year' }}
              isSearchable={false}
            />
          </YearSelect>
        </SelectWrapper>
      </SelectBlock>
      <Button>{buttonText}</Button>
    </Form>
  </Wrapper>
);

export default SignUp;
