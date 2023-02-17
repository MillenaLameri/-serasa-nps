import { Nps } from "../models/Nps";

export function useNpsService() {
  const mockPostNps = async (value: Nps) => {
    const wait = (interval: number) =>
      new Promise<void>((res) => setTimeout(res, interval));
    await wait(3000);
    return fetch("http://localhost:3001/Dados", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
  };

  return {
    mockPostNps,
  };
}
