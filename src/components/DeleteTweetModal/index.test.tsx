import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { FirebaseCollections } from '@/api/firebase';
import { lightTheme } from '@/constants/theme/themes';
import * as tweetHelpers from '@/helpers';
import { store } from '@/store';
import { ITweet } from '@/store/slices/tweetsSlice/types';

import DeleteTweetModal from '.';

const { TWEETS_COLLECTION } = FirebaseCollections;

describe('Renders Delete Tweet Modal', () => {
  const handleCloseModal = jest.fn();

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

  it('Should test tweet delete', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <DeleteTweetModal handleCloseModal={handleCloseModal} tweetData={tweetData} />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const deleteTweetHelper = jest.spyOn(tweetHelpers, 'deleteTweetHelper');

    const closeModal = getByTestId('closeModal');
    expect(closeModal).toBeInTheDocument();
    const deleteTweet = getByTestId('deleteTweet');
    expect(deleteTweet).toBeInTheDocument();

    fireEvent.click(deleteTweet);

    expect(deleteTweetHelper).toHaveBeenCalledWith(
      TWEETS_COLLECTION,
      tweetData.id,
      tweetData.image
    );
  });
});
