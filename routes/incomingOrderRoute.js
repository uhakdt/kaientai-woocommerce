const express = require('express');
const request = require('request');

const router = express.Router();

let API_URL = process.env.KAIENTAI_API_URL;

// GET INCOMING ORDER DETAILS
router.post('/api/v1/sendOrder/:supplierID', async (req, res) => {
  try {
    const reqOpt = {
      url: `${API_URL}/api/v1/klf/woocommerce/${req.params.supplierID}`,
      method: 'POST',
      json: {
        "data": req.body
      },
    };
    request(reqOpt, (err, resp, body) => {
      res.status(resp.statusCode).json({
        status: resp.body.status
      })
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;