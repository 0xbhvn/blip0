"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface HeaderContextValue {
  title?: string;
  badge?: string;
  actions?: ReactNode;
  setHeaderData: (data: Partial<Omit<HeaderContextValue, "setHeaderData">>) => void;
  clearHeaderData: () => void;
}

const HeaderContext = createContext<HeaderContextValue | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [headerData, setHeaderDataState] = useState<
    Omit<HeaderContextValue, "setHeaderData" | "clearHeaderData">
  >({});

  const setHeaderData = useCallback((
    data: Partial<Omit<HeaderContextValue, "setHeaderData" | "clearHeaderData">>
  ) => {
    setHeaderDataState(data);
  }, []);

  const clearHeaderData = useCallback(() => {
    setHeaderDataState({});
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        ...headerData,
        setHeaderData,
        clearHeaderData,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}