import moment from "moment";

export default [
  {
    id: "1",
    description: "Rice",
    note: "",
    amount: 200,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Shirt",
    note: "",
    amount: 890,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Rent",
    note: "",
    amount: 1500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
