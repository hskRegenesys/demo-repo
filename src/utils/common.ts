export const shuffleArray = (list: Array<any>) => {
  return list?.sort(() => Math.random() - 0.5);
};

export const getOneRandom = (list: Array<any>) => {
  return list?.length > 0
    ? Math.floor(Math.random() * list.length)
    : list?.length;
};
