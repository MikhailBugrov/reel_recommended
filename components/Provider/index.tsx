"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import store from "../../store/store";

function MyProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </Provider>
  );
}

export default MyProvider;
