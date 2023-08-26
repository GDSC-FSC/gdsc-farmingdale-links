import { createContext, useContext, ReactNode, useState } from 'react';
interface ErrorContextValue {
  error: Error | null;
  handleError: (error: Error) => void;
  clearError: () => void;
}
const ErrorHandlerContext = createContext<ErrorContextValue | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export function useErrorHandler() {
  const context = useContext(ErrorHandlerContext);
  if (!context) {
    throw new Error('useErrorHandler must be used within an ErrorHandlerProvider');
  }
  return context;
}
interface ErrorHandlerProviderProps {
  children: ReactNode;
}
export function ErrorHandlerProvider({ children }: ErrorHandlerProviderProps) {
  const [error, setError] = useState<Error | null>(null);
  const handleError = (error: Error) => { setError(error); };
  const clearError = () => { setError(null); };
  const contextValue: ErrorContextValue = { error, handleError, clearError };
  return (
    <ErrorHandlerContext.Provider value={contextValue}>
      {children}
    </ErrorHandlerContext.Provider>
  );
}