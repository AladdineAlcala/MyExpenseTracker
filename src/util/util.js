const cleanDecimal = (val) => {
 return parseFloat(val.replace(/,/g, "")).toFixed(2);
};

export default cleanDecimal;
