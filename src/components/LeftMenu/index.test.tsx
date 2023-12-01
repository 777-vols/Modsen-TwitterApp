import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from '@/constants/theme/themes';
import { store } from '@/store';

import LeftMenu from '.';

jest.mock('firebase/app', () => {
  const userCredentialMock = {
    user: {
      sendEmailVerification: jest.fn()
    }
  };
  return {
    auth: jest.fn().mockReturnThis(),
    currentUser: {
      email: 'test',
      uid: '123',
      emailVerified: true
    },
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(() => userCredentialMock),
    sendPasswordResetEmail: jest.fn(),
    signOut: jest.fn(),
    onAuthStateChanged: jest.fn(),
    initializeApp: jest.fn()
  };
});

describe('Renders Home page', () => {
  it('Should check for the presence of basic blocks', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <BrowserRouter>
            <LeftMenu />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
    const headerTitle = getByText('Log out');
    expect(headerTitle).toBeTruthy();
  });
});
