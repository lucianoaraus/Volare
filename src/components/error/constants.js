export const ERROR_TYPES = {
  Quantity: "Quantity",
  Location: "Location",
};

export const getMessageFromError = (error) => {
  switch (error.type) {
    case ERROR_TYPES.Quantity:
      return `You must to add a valid quantity of Guests ${error.data} (for example 2 or 4)`;

    default:
      //Default works as ERROR_TYPES.Location
      return "Your location is not valid.";
  }
};
