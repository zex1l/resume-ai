export const getRandomTextFromArray = (textArr: string[]) => {
  const randomIndex = Math.floor(Math.random() * textArr.length);
  return textArr[randomIndex];
};
