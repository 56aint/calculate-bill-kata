const calculateBill = (price, vat, tip) => {
  let amount = "£"+(price +  (price * vat / 100) + tip);

  return (typeof price == "number" && typeof tip == "number") ?amount : "error";
}
  module.exports = calculateBill;