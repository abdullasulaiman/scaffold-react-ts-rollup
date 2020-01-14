let initialNumber = 0;

export const generateNewNumber = (): Promise<number> => {
  // eslint-disable-next-line no-undef
  const promise = new Promise<number>((resolve) => {
    setTimeout(() => {
      initialNumber += 1;
      resolve(initialNumber);
    }, 500);
  });
  return promise;
};
