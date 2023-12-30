import { PropsWithChildren, createContext, useContext } from 'react';
import { API } from 'ynab';

export const createApi = () => {
  console.log("creating API")
  return new API(import.meta.env.VITE_YNAB_API_KEY);
}

const YNABContext = createContext<API | null>(null);

export const useYNAB = () => {
    const api = useContext(YNABContext);
    if (!api) {
        throw new Error('useYNAB must be used within a YNABProvider');
    }
    return api;
}

export const YNABProvider = ({ children, api }: PropsWithChildren<{api: API}>) => (
  <YNABContext.Provider value={api}>{children}</YNABContext.Provider>
);