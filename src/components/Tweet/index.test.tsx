import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { FirebaseCollections } from '@/api/firebase/constants';
import * as firebaseHelpers from '@/api/firebase/firebaseHelpers';
import { lightTheme } from '@/constants/theme/themes';
import { store } from '@/store';
import { ITweet } from '@/store/slices/tweetsSlice/types';

import Tweet from '.';

const { TWEETS_COLLECTION } = FirebaseCollections;

describe('Renders Tweet', () => {
  const currentUserId = 'B7nuKnhEr5Z8WqP4sAsmaz9El6K2';

  const tweetData: ITweet = {
    id: '6caba1e9-e33b-439c-972d-0812030bc843',
    author: {
      id: 'z4nQGnWHn8fPAIdnrs5pkxeZIdH3',
      name: 'Peter',
      email: 'peter123@mail.ru'
    },
    text: 'Test tweet text',
    date: 1701643495693,
    image: '',
    likes: []
  };

  it('Should check tweet elements', () => {
    const { getByText, getByTestId, getByAltText } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <Tweet tweetData={tweetData} currentUserId={tweetData.author.id} isUserAuth />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const userName = getByText('Peter');
    expect(userName).toBeInTheDocument();
    const userEmail = getByText('peter123@mail.ru ·');
    expect(userEmail).toBeInTheDocument();
    const authorTweetAvatar = getByAltText('tweet avatar');
    expect(authorTweetAvatar).toBeInTheDocument();

    const tweetDate = getByTestId('tweetDate');
    expect(tweetDate).toBeInTheDocument();
    const deleteTweet = getByTestId('deleteTweet');
    expect(deleteTweet).toBeInTheDocument();
  });

  it('Should test tweet delete', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <Tweet tweetData={tweetData} currentUserId={currentUserId} isUserAuth />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const updateLikesInFirebaseDoc = jest.spyOn(firebaseHelpers, 'updateLikesInFirebaseDoc');

    const userName = getByText('Peter');
    expect(userName).toBeInTheDocument();
    const userEmail = getByText('peter123@mail.ru ·');
    expect(userEmail).toBeInTheDocument();
    const likeTweet = getByTestId('likeTweet');

    fireEvent.click(likeTweet);

    expect(updateLikesInFirebaseDoc).toHaveBeenCalledWith(TWEETS_COLLECTION, tweetData.id, [
      currentUserId
    ]);
  });
});
