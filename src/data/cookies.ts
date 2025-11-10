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
    image: require('../assets/images/kopi.png'), // Updated to .png
    description: 'Kue kering rasa kopi yang kaya dan aromatik, cocok untuk pecinta kopi.',
    price: 'Rp 17.000/pcs'
  },
  {
    id: 'coklat',
    name: 'Coklat Cookies',
    image: require('../assets/images/coklat.png'), // Updated to .png
    description: 'Kue kering coklat dengan potongan coklat lezat, kenikmatan ganda.',
    price: 'Rp 18.000/pcs'
  },
  {
    id: 'matcha',
    name: 'Matcha Cookies',
    image: require('../assets/images/matcha.png'), // Updated to .png
    description: 'Kue kering matcha dengan rasa teh hijau Jepang yang unik dan menenangkan.',
    price: 'Rp 19.000/pcs'
  },
  {
    id: 'red-velvet',
    name: 'Red Velvet Cookies',
    image: require('../assets/images/redvelvet.png'), // Updated to .png
    description: 'Kue kering red velvet yang lembut dengan sentuhan rasa coklat dan krim keju.',
    price: 'Rp 20.000/pcs'
  },
  {
    id: 'mint',
    name: 'Mint Cookies',
    image: require('../assets/images/mint.png'), // Updated to .png
    description: 'Kue kering rasa mint yang menyegarkan, perpaduan manis dan dingin.',
    price: 'Rp 21.000/pcs'
  }
];