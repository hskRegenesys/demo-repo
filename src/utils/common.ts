export const getRandom = (list: Array<any>) => {
  return list?.sort(() => Math.random() - 0.5);
};
