export const dirHelper = (column, reverse) => {
  const flexDir = [];
  if (column) {
    flexDir.push("column");
  } else {
    flexDir.push("row");
  }
  if (reverse) {
    flexDir.push("reverse");
  }
  return flexDir.join("-");
};
