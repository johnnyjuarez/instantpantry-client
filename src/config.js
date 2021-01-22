
const config = {
  // API_ENDPOINT: 'http://localhost:8000/api',
  API_ENDPOINT: 'https://aqueous-springs-15599.herokuapp.com/api',
  TOKEN_KEY: 'jwt',
  BARCODE_API: `https://api.barcodelookup.com/v2/products?barcode=`,
  CAPTURE_OPTIONS: {
    audio: false,
    video: { facingMode: 'environment' }
  }
};

export default config;