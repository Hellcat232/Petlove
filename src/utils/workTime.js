function workTime(time) {
  if (!time.workDays || time.workDays.length < 1) {
    return `Day and Night`;
  }

  const openDay = time.workDays.find((day) => day.isOpen);

  if (!openDay) {
    return `Today we are close`;
  }

  const { from, to } = openDay;

  return `${from} - ${to}`;
}

export default workTime;
