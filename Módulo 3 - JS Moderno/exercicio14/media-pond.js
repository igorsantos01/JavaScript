document.querySelector("#media-pond").addEventListener("click", () => {
  const numbers = [
    { n: 7, w: 2 },
    { n: 9, w: 5 },
    { n: 3, w: 1 },
  ];
  const multiNumWei = numberMultipledWeight(...numbers);
  const sumW = sumWeight(...numbers);
  const media = mediaAritPond(multiNumWei, sumW);
  console.log(media.toFixed(1));
});

const numberMultipledWeight = (...numbers) => {
  let numMultiWeight = 0;
  numbers.forEach((number) => {
    numMultiWeight += number.n * number.w;
  });
  return numMultiWeight;
};
const sumWeight = (...numbers) => {
  let sumWeight = 0;
  numbers.forEach((number) => (sumWeight += number.w));
  return sumWeight;
};
const mediaAritPond = (multiNumWei, sumWeight) => {
  const media = multiNumWei / sumWeight;
  return media;
};
