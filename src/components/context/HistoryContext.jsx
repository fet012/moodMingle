import { createContext, useState } from "react";
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryContext, HistoryProvider };
