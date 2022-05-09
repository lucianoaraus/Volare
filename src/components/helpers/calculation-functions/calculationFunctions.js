const datesDifference = (date1, date2) => {
  const dateDataType1 = new Date(date1);
  const dateDataType2 = new Date(date2);

  const date1UTC = Date.UTC(
    dateDataType1.getFullYear(),
    dateDataType1.getMonth(),
    dateDataType1.getDate()
  );
  const date2UTC = Date.UTC(
    dateDataType2.getFullYear(),
    dateDataType2.getMonth(),
    dateDataType2.getDate()
  );

  const day = 1000 * 60 * 60 * 24;

  return (date2UTC - date1UTC) / day;
};

const totalPrice = (item) => {
  const totalNights = datesDifference(item.checkIn, item.checkOut);
  const nightPrice = item.nightPrice;
  return nightPrice * totalNights;
};

export { datesDifference, totalPrice };
