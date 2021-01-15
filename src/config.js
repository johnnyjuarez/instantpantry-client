
const config = {
  API_ENDPOINT: 'http://localhost:8000/api',
  TOKEN_KEY: 'jwt',
  BARCODE_API: `https://api.barcodelookup.com/v2/products?barcode=9780140157376&formatted=y&key=${process.env.REACT_APP_API_KEY}`,
  CAPTURE_OPTIONS: {
    audio: false,
    video: { facingMode: 'environment'}
  }
};

export default config;