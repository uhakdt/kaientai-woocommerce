const express = require('express');
const request = require('request');

const router = express.Router();

let currentURL = process.env.KAIENTAI_API_URL_PROD;

if(process.env.NODE_ENV === 'Development') {
  currentURL = process.env.KAIENTAI_API_URL_DEV
}

// GET INCOMING ORDER DETAILS
router.post('/api/v1/sendOrder', async (req, res) => {

  const reqOptKLFWooCommerce = {
    url: `${currentURL}/api/v1/klf/woocommerce/${2}`,
    method: 'POST',
    json: {
      "dataBody": req.body
    },
  };
  
  try {
    console.log(req.body)
    request(reqOptKLFWooCommerce, (err, resKLFWooCommerce, body) => { })
    res.status(200).json({
      status: "OK",
      data: {
        order: req.body
      }
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;