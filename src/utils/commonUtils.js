let keyCounter = 0;

export const keyGenerator = () => keyCounter++;

export const responeStatusHandler = (res) => {
  const { status } = res;
  if (status !== 200) {
    new Error("Data call is unsuccessful!");
  } else {
    return res.json();
  }
};
