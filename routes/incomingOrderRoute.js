const express = require('express');
const request = require('request-promise');

const router = express.Router();

let API_URL = process.env.KAIENTAI_API_URL;

// GET INCOMING ORDER DETAILS
router.post('/api/v1/sendOrder/:supplierID', async (req, res) => {

  const reqOpt = {
    url: `${API_URL}/api/v1/klf/woocommerce/${req.params.supplierID}`,
    method: 'POST',
    json: {
      "data": req.body
    },
  };
  
  try {
    console.log(req.body)
    await request(reqOpt)
    .then(resp => {
      res.status(200).json({
        status: "OK",
        data: {
          order: req.body
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;