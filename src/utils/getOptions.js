function getOption(selector) {
  if (!selector) return;

  let filtersValue = selector.map((data) => {
    return {
      value: data.charAt(0).toUpperCase() + data.slice(1),
      label: data.charAt(0).toUpperCase() + data.slice(1),
    };
  });

  return filtersValue;
}

export default getOption;
