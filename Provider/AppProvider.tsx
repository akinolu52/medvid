import { createContext, useState } from "react";

interface AppContextInterface {
    data: string | null;
    setData: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

// export const AppContext = createContext({});

const AppProvider = ({ children }: never) => {
  const [data, setData] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

// function useAuth() {
//   const context = useContext(AuthContext);
  
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
  
//   return context;
// }
  
// export { useAuth, AuthProvider };

    
export default AppProvider;
