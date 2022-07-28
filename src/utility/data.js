import TestiImage1 from "../components/img/all.png";
import TestiImage2 from "../components/img/rad.png";
import TestiImage3 from "../components/img/s1.png";
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiMail,
} from 'react-icons/fi';


export const categories = [
    {
        id: 1,
        name: "Fruits",
        urlParamname: "cherry",
    },

    {
        id: 2,
        name: "Veggies",
        urlParamname: "veg",

    },
    {
        id: 3,
        name: "Meat",
        urlParamname: "fish",
    },
    {
        id: 4,
        name: "Staples",
        urlParamname: "atta",
    },
    {
        id: 5,
        name: "Beverages",
        urlParamname: "soft drink",
    },
    {
        id: 6,
        name: "Snacks",
        urlParamname: "chips",
    },

];


export const review = [
    {
      authorImg: TestiImage1,
      customerText:
        ' Nice quality of products and delivery on time. It is fresh! It is value for money! It is good to cook!',
      customerName: 'Shirin Sharma',
      customerMain: ' Simply Amazing Products',
    },
    {
      authorImg: TestiImage2,
      customerText:
        'Very fresh vegetables Highly Recommend. It is value for Money !!!',
      customerName: 'Rajesh Verma',
      customerMain: 'Good product and timely delivered',
    },
    {
      authorImg: TestiImage3,
      customerText:
        'Very fresh spinach. It did not get stale easily. 10/10 would reccomend! ',
      customerName: 'Amisha Goel',
      customerMain: 'Nice',
    },
  ];
  
  
export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiDribbble />,
      href: '',
    },
  ];
  

