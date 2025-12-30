import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // You can send to Sentry, LogRocket, etc.
    }
    // For development, we'll just log to console
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 text-center">
            <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Что-то пошло не так
            </h1>
            <p className="text-zinc-400 mb-6">
              Произошла непредвиденная ошибка. Попробуйте перезагрузить страницу.
            </p>
            {this.state.error && process.env.NODE_ENV !== 'production' && (
              <div className="mb-6 p-4 bg-zinc-950 border border-zinc-800 rounded text-left">
                <p className="text-xs font-mono text-red-400 break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Перезагрузить
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
