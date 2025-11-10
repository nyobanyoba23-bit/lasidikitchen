export interface Cookie {
  id: string;
  name: string;
  image: string;
  description: string;
  price?: string; // Optional, as no payment
}

export const cookieData: Cookie[] = [
  {
    id: 'kopi',
    name: 'Coffee Cookies',
    image: require('../assets/images/kopi.png'),
    description: 'Rich and aromatic coffee-flavored cookies, perfect for coffee lovers.',
    price: 'Rp 17.000/pcs'
  },
  {
    id: 'coklat',
    name: 'Chocolate Cookies',
    image: require('../assets/images/coklat.png'),
    description: 'Chocolate cookies with delicious chocolate chunks, a double delight.',
    price: 'Rp 18.000/pcs'
  },
  {
    id: 'matcha',
    name: 'Matcha Cookies',
    image: require('../assets/images/matcha.png'),
    description: 'Matcha cookies with a unique and soothing Japanese green tea flavor.',
    price: 'Rp 19.000/pcs'
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cookies',
    image: require('../assets/images/redvelvet.png'),
    description: 'Soft red velvet cookies with a hint of chocolate and cream cheese flavor.',
    price: 'Rp 20.000/pcs'
  },
  {
    id: 'mint',
    name: 'Mint Cookies',
    image: require('../assets/images/mint.png'),
    description: 'Refreshing mint-flavored cookies, a sweet and cool combination.',
    price: 'Rp 21.000/pcs'
  }
];
