import p1_img from '../assets/product_1.png';
import p2_img from '../assets/product_2.png';
import p3_img from '../assets/product_3.png';
import p4_img from '../assets/product_4.png';
import p5_img from '../assets/product_5.png';
import p6_img from '../assets/product_6.png';
import p7_img from '../assets/product_7.png';
import p8_img from '../assets/product_8.png';
import p9_img from '../assets/product_9.png';
import p10_img from '../assets/product_10.png';
import p11_img from '../assets/product_11.png';
import p12_img from '../assets/product_12.png';
import p13_img from '../assets/product_13.png';
import p14_img from '../assets/product_14.png';
import p15_img from '../assets/product_15.png';
import p16_img from '../assets/product_16.png';
import p17_img from '../assets/product_17.png';
import p18_img from '../assets/product_18.png';
import p19_img from '../assets/product_19.png';
import p20_img from '../assets/product_20.png';
import p21_img from '../assets/product_21.png';
import p22_img from '../assets/product_22.png';
import p23_img from '../assets/product_23.png';
import p24_img from '../assets/product_24.png';
import p25_img from '../assets/product_25.png';
import p26_img from '../assets/product_26.png';
import p27_img from '../assets/product_27.png';
import p28_img from '../assets/product_28.png';
import p29_img from '../assets/product_29.png';
import p30_img from '../assets/product_30.png';
import p31_img from '../assets/product_31.png';
import p32_img from '../assets/product_32.png';
import p33_img from '../assets/product_33.png';
import p34_img from '../assets/product_34.png';
import p35_img from '../assets/product_35.png';
import p36_img from '../assets/product_36.png';

let all_products = [
  {
    id: 1,
    name: 'Dưa hấu',
    category: 'fruit',
    image: p1_img,
    new_price: 0.6,
    old_price: 0.72,
  },
  {
    id: 2,
    name: 'Bơ',
    category: 'fruit',
    image: p2_img,
    new_price: 0.8,
    old_price: 1.08,
  },
  {
    id: 3,
    name: 'Kiwi',
    category: 'fruit',
    image: p3_img,
    new_price: 2.4,
    old_price: 3.6,
  },
  {
    id: 4,
    name: 'Chuối',
    category: 'fruit',
    image: p4_img,
    new_price: 0.8,
    old_price: 1.16,
  },
  {
    id: 5,
    name: 'Dâu Tây',
    category: 'fruit',
    image: p5_img,
    new_price: 6.9,
    old_price: 7.2,
  },
  {
    id: 6,
    name: 'Cà chua',
    category: 'vegetable',
    image: p6_img,
    new_price: 2.0,
    old_price: 2.32,
  },
  {
    id: 7,
    name: 'Bông cải xanh',
    category: 'vegetable',
    image: p7_img,
    new_price: 1.8,
    old_price: 2.0,
  },
  {
    id: 8,
    name: 'Rau muống',
    category: 'vegetable',
    image: p8_img,
    new_price: 0.96,
    old_price: 1.3,
  },
  {
    id: 9,
    name: 'Cải rổ',
    category: 'vegetable',
    image: p9_img,
    new_price: 0.96,
    old_price: 1.3,
  },
  {
    id: 10,
    name: 'Xà lách Lo Lo',
    category: 'vegetable',
    image: p10_img,
    new_price: 1.08,
    old_price: 1.2,
  },
  {
    id: 11,
    name: 'Vải',
    category: 'fruit',
    image: p11_img,
    new_price: 1.4,
    old_price: 2.0,
  },
  {
    id: 12,
    name: 'Mận',
    category: 'fruit',
    image: p12_img,
    new_price: 1.8,
    old_price: 2.4,
  },
  {
    id: 13,
    name: 'Mãng cầu xiêm',
    category: 'fruit',
    image: p13_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 14,
    name: 'Sầu riêng',
    category: 'fruit',
    image: p14_img,
    new_price: 6.4,
    old_price: 8,
  },
  {
    id: 15,
    name: 'Sapoche',
    category: 'fruit',
    image: p15_img,
    new_price: 1.5,
    old_price: 1.84,
  },
  {
    id: 16,
    name: 'măng cục',
    category: 'fruit',
    image: p16_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 17,
    name: 'Xoài',
    category: 'fruit',
    image: p17_img,
    new_price: 2.8,
    old_price: 4,
  },
  {
    id: 18,
    name: 'Mãng cầu',
    category: 'fruit',
    image: p18_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 19,
    name: 'Thanh long',
    category: 'fruit',
    image: p19_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 20,
    name: 'Cam',
    category: 'fruit',
    image: p20_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 21,
    name: 'Thanh long đỏ',
    category: 'fruit',
    image: p21_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 22,
    name: 'Dưa lưới',
    category: 'fruit',
    image: p22_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 23,
    name: 'Trái vú sữa',
    category: 'fruit',
    image: p23_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 24,
    name: 'Mít',
    category: 'fruit',
    image: p24_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 25,
    name: 'Cóc',
    category: 'fruit',
    image: p25_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 26,
    name: 'Hồng xiêm',
    category: 'fruit',
    image: p26_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 27,
    name: 'Bắp cải',
    category: 'vegetable',
    image: p27_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 28,
    name: 'Trái Bí Đao',
    category: 'vegetable',
    image: p28_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 29,
    name: 'Bí Ngô',
    category: 'vegetable',
    image: p29_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 30,
    name: 'Bầu',
    category: 'vegetable',
    image: p30_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 31,
    name: 'Cà tím',
    category: 'vegetable',
    image: p31_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 32,
    name: 'Cà pháo',
    category: 'vegetable',
    image: p32_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 33,
    name: 'Cà rốt',
    category: 'vegetable',
    image: p33_img,
    new_price: 3.2,
    old_price: 4,
  },
  {
    id: 34,
    name: 'Gift 1',
    category: 'present',
    image: p34_img,
    new_price: 40,
    old_price: 42,
  },
  {
    id: 35,
    name: 'Gift 2',
    category: 'present',
    image: p35_img,
    new_price: 40,
    old_price: 42,
  },
  {
    id: 36,
    name: 'Gift 3',
    category: 'present',
    image: p36_img,
    new_price: 40,
    old_price: 42,
  },
];

export default all_products;
