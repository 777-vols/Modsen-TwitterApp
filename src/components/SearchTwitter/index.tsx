import { ChangeEvent, FC, memo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Notification from '@/components/Notification';
import { IProps as ITweetItem } from '@/components/SearchTwitter/TweetItem/types';
import { IProps as IUserItem } from '@/components/SearchTwitter/UserItem/types';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { comparePathHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { config as rootConfig } from '@/pages/Root/config';
import { TextLink } from '@/pages/Root/styled';

import { config } from './config';
import {
  Button,
  Content,
  Image,
  Input,
  NavItem,
  NavList,
  SearchForm,
  SearchResult,
  Signature,
  StyledLink,
  Title,
  Wrapper
} from './styled';
import TweetItem from './TweetItem';
import { IProps, SetState } from './types';
import UserItem from './UserItem';

const { HOME } = Urls;

const { searchIcon } = allImages;

const { mainTitle, showMore } = config;
const { footerLinks, company } = rootConfig;

const SearchTwitter: FC<IProps> = ({ placeholder, searchData, errorText }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [usersArray, setUsersArray] = useState<IUserItem[]>([]);
  const [tweetsArray, setTweetsArray] = useState<ITweetItem[]>([]);
  const { setErrorNotification } = useAction();

  const { pathname } = useLocation();

  const isHomePage = comparePathHelper(HOME, pathname);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const searchDataHelper = async <T,>(stateSetter: SetState<T[]>) => {
    if (inputValue) {
      const data = (await searchData(inputValue)) as T[];

      if (data.length === 0) {
        setErrorNotification({
          message: errorText
        });
      }

      stateSetter(data);
    }
  };

  const handleSubmitForm = async () => {
    if (isHomePage) {
      await searchDataHelper(setUsersArray);
    } else {
      await searchDataHelper(setTweetsArray);
    }
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmitForm}>
        <Button type="submit">
          <Image src={searchIcon} alt="search" />
        </Button>
        <Input placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
      </SearchForm>
      <Content>
        <Title>{mainTitle}</Title>
        <SearchResult>
          {isHomePage
            ? usersArray.map(({ id, name, photo, email }) => (
                <UserItem key={id} id={id} name={name} photo={photo} email={email} />
              ))
            : tweetsArray.map(() => <TweetItem key={Math.random()} />)}
        </SearchResult>
        <TextLink to="#">{showMore}</TextLink>
      </Content>
      <NavList>
        {footerLinks.map(({ name, path }) => (
          <NavItem key={name}>
            <StyledLink to={path}>{name}</StyledLink>
          </NavItem>
        ))}
        <NavItem>
          <Signature>{company}</Signature>
        </NavItem>
      </NavList>
      <Notification />
    </Wrapper>
  );
};

export default memo(SearchTwitter);
