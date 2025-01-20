function calculatePupularity(value) {
  let popularity;

  if (value <= 1000) {
    popularity = 1;
  } else if (value <= 2000) {
    popularity = 2;
  } else if (value <= 3000) {
    popularity = 3;
  } else if (value <= 4000) {
    popularity = 4;
  } else if (value <= 5000) {
    popularity = 5;
  } else if (value <= 6000) {
    popularity = 6;
  } else if (value <= 7000) {
    popularity = 7;
  } else if (value <= 8000) {
    popularity = 8;
  } else if (value <= 9000) {
    popularity = 9;
  } else if (value <= 10000) {
    popularity = 10;
  } else {
    popularity = "super star";
  }

  return popularity;
}

export default calculatePupularity;
