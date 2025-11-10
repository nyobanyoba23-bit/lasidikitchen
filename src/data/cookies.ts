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
    name: 'Kopi Cookies',
    image: require('../assets/images/kopi.jpg'), // Placeholder image
    description: 'Kue kering rasa kopi yang kaya dan aromatik, cocok untuk pecinta kopi.',
    price: 'Rp 17.000/pcs'
  },
  {
    id: 'coklat',
    name: 'Coklat Cookies',
    image: require('../assets/images/coklat.jpg'), // Placeholder image
    description: 'Kue kering coklat dengan potongan coklat lezat, kenikmatan ganda.',
    price: 'Rp 18.000/pcs'
  },
  {
    id: 'matcha',
    name: 'Matcha Cookies',
    image: require('../assets/images/matcha.jpg'), // Placeholder image
    description: 'Kue kering matcha dengan rasa teh hijau Jepang yang unik dan menenangkan.',
    price: 'Rp 19.000/pcs'
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cookies',
    image: require('../assets/images/redvelvet.jpg'), // Placeholder image
    description: 'Kue kering red velvet yang lembut dengan sentuhan rasa coklat dan krim keju.',
    price: 'Rp 20.000/pcs'
  }
];