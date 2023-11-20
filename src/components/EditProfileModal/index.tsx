import { FC, memo } from 'react';

import { Button, Form, Header, Input, InputWrapper } from '@/pages/SignUp/styled';

import { Background, CloseButton, Window } from './styled';
import { IProps } from './types';

const EditProfileModal: FC<IProps> = ({ handleCloseModal }) => (
  <Background>
    <Window>
      <CloseButton onClick={handleCloseModal}>X</CloseButton>
      <Form>
        <Header>Edit profile</Header>
        <InputWrapper>
          <Input type="text" placeholder="Name" />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Phone number" />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Password" />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Gender" />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Telegram" />
        </InputWrapper>
      </Form>
      <Button>Edit</Button>
    </Window>
  </Background>
);

export default memo(EditProfileModal);
