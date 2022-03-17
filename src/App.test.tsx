import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";

import rootReducer, { INITIAL_STATE } from "./common/reducer";
import App from "./App";

const Component = ({ customState }: any) => {
  return (
    <Provider
      store={createStore(rootReducer, { ...INITIAL_STATE, ...customState })}
    >
      <App />
    </Provider>
  );
};

describe("App", () => {
  it("by default lands on StartUp", () => {
    render(<Component />, {
      wrapper: ({ children }) => children,
    });
    expect(screen.getByText(/Welcome to MineSweeper/i)).toBeInTheDocument();
  });

  it("should render MineSweeper when level is created", async () => {
    render(
      <Component
        customState={{ levelCreated: true, map: [[]], levelValue: 1 }}
      />,
      {
        wrapper: ({ children }) => children,
      }
    );
    expect(await screen.findByText(/Level: Easy/i)).toBeInTheDocument();
  });
});
