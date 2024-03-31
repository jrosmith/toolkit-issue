"use client";

import { Counter, store } from "@repo/ui";
import { Provider } from "react-redux";

export default function Web() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    
  );
}
