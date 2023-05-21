import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Monika",
    lastName: "Shah",
    email: "monikashah@gmail.com",
    password: "monikashah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address:[
      {
        _id: uuid(),
        name: "Monika Shah",
        street: "5, IndiraNagar",
        city: "Pune",
        state: "Maharashtra",
        zipcode: '411005',
        country: 'India',
        mobile: '9834652340',
      },
      {
        _id: uuid(),
        name: "Ashish Gandhi",
        street: "M. G. Road",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: '876589',
        country: 'India',
        mobile: '9234782340',
      },
    ],
  },
];
