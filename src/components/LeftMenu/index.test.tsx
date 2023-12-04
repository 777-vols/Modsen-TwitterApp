import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@/constants/theme/themes';
import { store } from '@/store';

import LeftMenu from '.';

describe('Renders Left menu', () => {
  it('Should test for the presence of all buttons', () => {
    const { getByText, getAllByTestId } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <LeftMenu />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    const allMenuItems = getAllByTestId('menuItem');
    expect(allMenuItems).toHaveLength(8);

    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();
    const exploreLink = getByText('Explore');
    expect(exploreLink).toBeInTheDocument();
    const notificationsLink = getByText('Notifications');
    expect(notificationsLink).toBeInTheDocument();
    const messagesLink = getByText('Messages');
    expect(messagesLink).toBeInTheDocument();
    const bookmarksLink = getByText('Bookmarks');
    expect(bookmarksLink).toBeInTheDocument();
    const listsLink = getByText('Lists');
    expect(listsLink).toBeInTheDocument();
    const profileLink = getByText('Log out');
    expect(profileLink).toBeInTheDocument();
    const moreLink = getByText('More');
    expect(moreLink).toBeInTheDocument();

    const logOutButton = getByText('Log out');
    expect(logOutButton).toBeInTheDocument();
    const tweetButton = getByText('Tweet');
    expect(tweetButton).toBeInTheDocument();
  });
});
