const GetAllProducts = (WooCommerce) => {
  WooCommerce.get("products")
  .then((resp) => {
    console.log(resp.data)
    return resp.data
  })
  .catch((err) => {
    return err.response.data
  })
}

exports.GetAllProducts = GetAllProducts;