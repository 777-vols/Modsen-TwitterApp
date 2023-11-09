import { Component } from 'react';

import GlobalStyle from '@/constants/styles/globalStyle';
import theme from '@/constants/theme';

import { Content, Wrapper } from './styled';
import { IProps, IState } from './types';

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <GlobalStyle theme={theme} />
          <Content />
        </Wrapper>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
