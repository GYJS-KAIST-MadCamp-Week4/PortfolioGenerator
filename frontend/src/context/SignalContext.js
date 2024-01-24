import React, { createContext, useContext, useState } from 'react';

const SignalContext = createContext();

export const SignalProvider = ({ children }) => {
  const [signal, setSignal] = useState([[0, 0, 0], [0, 0], [0, 0, 0], [0, 0]]);

  return (
    <SignalContext.Provider value={{ signal, setSignal }}>
      {children}
    </SignalContext.Provider>
  );
};

export const useSignal = () => {
  return useContext(SignalContext);
};