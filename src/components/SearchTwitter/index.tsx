import { ChangeEvent, FC, memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Notification from '@/components/Notification';
import { IProps as IUserItem } from '@/components/SearchTwitter/SearchResultItem/types';
import { allImages } from '@/constants/allImages';
import { Urls } from '@/constants/urls';
import { comparePathHelper, searchRecommemdedUsersHelper } from '@/helpers/searchHelpers';
import { useAction } from '@/hooks/useAction';
import { IUser } from '@/pages/Profile/types';
import { config as rootConfig } from '@/pages/Root/config';
import { TextLink } from '@/pages/Root/styled';
import { ITweet } from '@/store/slices/tweetsSlice/types';
import { userSelector } from '@/store/slices/userSlice/selectors';

import { Loader } from '../Loader';
import { config } from './config';
import SearchResultItem from './SearchResultItem';
import {
  Button,
  Content,
  Image,
  Input,
  LodaderWrapper,
  NavItem,
  NavList,
  SearchForm,
  SearchResult,
  Signature,
  StyledLink,
  Title,
  Wrapper
} from './styled';
import { IProps, SetState } from './types';

const { HOME } = Urls;

const { searchIcon } = allImages;

const { mainTitle, showMore } = config;
const { footerLinks, company } = rootConfig;

const SearchTwitter: FC<IProps> = ({ placeholder, searchData, errorText }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [usersArray, setUsersArray] = useState<IUserItem[]>([]);
  const [tweetsArray, setTweetsArray] = useState<ITweet[]>([]);
  const { setErrorNotification } = useAction();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authorizedUser = useSelector(userSelector) as IUser;
  const { pathname } = useLocation();

  const isHomePage = comparePathHelper(HOME, pathname);

  const searchResultArray = useMemo(() => {
    if (inputValue !== '' && !isHomePage) {
      return tweetsArray.map(({ id, author }) => {
        const { name, photo, email } = author;
        return <SearchResultItem key={id} id={id} name={name} photo={photo} email={email} />;
      });
    }
    return usersArray.map(({ id, name, photo, email }) => (
      <SearchResultItem key={id} id={id} name={name} photo={photo} email={email} isUserSearch />
    ));
  }, [isHomePage, tweetsArray, usersArray]);

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue === '') {
        setIsLoading(true);
        const users = await searchRecommemdedUsersHelper(authorizedUser.id);
        setUsersArray(users);
      }
    };
    fetchData().catch((error: Error) => {
      setErrorNotification({
        message: error.message
      });
    });
    setIsLoading(false);
  }, [authorizedUser.id, inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const searchDataHelper = async <T,>(stateSetter: SetState<T[]>) => {
    if (inputValue) {
      setIsLoading(true);
      const data = (await searchData(inputValue)) as T[];
      setIsLoading(false);

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

  useEffect(() => {
    const timerId = setTimeout(handleSubmitForm, 700);
    return () => clearTimeout(timerId);
  }, [inputValue]);

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
          {isLoading ? (
            <LodaderWrapper>
              <Loader size={50} />
            </LodaderWrapper>
          ) : (
            searchResultArray
          )}
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
