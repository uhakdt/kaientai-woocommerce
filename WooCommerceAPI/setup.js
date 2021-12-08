const { GetAllProducts } = require('./product')

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerceAPISetup = () => {
  const WooCommerce = new WooCommerceRestApi({
    url: process.env.WOOCOMMERCE_API_SHOP_URL,
    consumerKey: process.env.WOOCOMMERCE_API_CONSUMER_KEY,
    consumerSecret: process.env.WOOCOMMERCE_API_SECRET_KEY,
    version: 'wc/v3'
  });
  const productsResult = GetAllProducts(WooCommerce);
  console.log(productsResult)
}

exports.WooCommerceAPISetup = WooCommerceAPISetup;