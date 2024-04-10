import { render } from "@testing-library/react";

import { App } from "../AppModule";
import { VITE_GA_MESUREMENT_ID } from "../../../constants/envs";

jest.mock("../../../constants/envs.ts", () => ({
  ENVIRONMENT: "development",
  VITE_API_BASE_PATH: "http://localhost:5005/api/v1",
  VITE_GA_MESUREMENT_ID: "G-T9J306KB7R",
}));

describe("Constants", () => {
  test("Env vars can be mocked", async () => {
    expect(VITE_GA_MESUREMENT_ID).toEqual("G-T9J306KB7R");
  });
});

describe("App Module", () => {
  it.only("renders", () => {
    render(<App />);
  });
});
