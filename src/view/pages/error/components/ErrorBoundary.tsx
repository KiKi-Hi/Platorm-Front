import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // TODO: sentry 에러 로깅 서비스에 에러 send
    console.error('에러 발생:', error);
    console.error('에러 정보:', errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="error-container">
            <h2>문제가 발생했습니다.</h2>
            <p>{this.state.error?.message}</p>
            <button onClick={() => window.location.reload()}>새로고침</button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
