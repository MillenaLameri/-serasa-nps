export function useNpsService() {
  function mockPostNps<T>(expected: T) {
    return new Promise((res) => {
      setTimeout(res, 2e3, expected);
    });
  }

  return {
    mockPostNps,
  };
}
