function workTime(time) {
  if (time.workDays === null || time.workDays < 1) {
    return `${"Day"} and ${"Night"} `;
  }

  let { from } = time.workDays.find((day) => {
    if (day.isOpen === true) {
      return day.from;
    }
  });

  let { to } = time.workDays.find((day) => {
    if (day.isOpen) {
      return day.to;
    }
  });

  return `${from}-${to} `;
}

export default workTime;
