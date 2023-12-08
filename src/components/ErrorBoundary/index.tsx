import { Component } from 'react';

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
          <Content />
        </Wrapper>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
