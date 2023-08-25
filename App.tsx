import Home from "./Home";
import AppProvider from "./Provider/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
