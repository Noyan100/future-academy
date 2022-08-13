const colorList = [
  '#C7EEFF',
  '#FFCE94',
  '#FFE38E',
  '#DDDDFF',
  '#B8EFCF',
  '#C7EEFF',
  '#C5DDFF',
  '#FFEEF6',
];

export const colors = (count: number) => {
  let number = -1;
  return [...new Array(count)].map(() => {
    number >= 7 ? (number = 0) : number++;
    return colorList[number];
  });
};
