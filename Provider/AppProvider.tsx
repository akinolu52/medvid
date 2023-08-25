import { ReactNode, createContext, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextInterface {
    data: string | null;
    setData: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);


const AppProvider: React.FC<AppProviderProps> = ({ children }: AppProviderProps) => {
  const [data, setData] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
    
export default AppProvider;
