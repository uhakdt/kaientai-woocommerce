const express = require('express');

const router = express.Router();

// GET INCOMING ORDER DETAILS
router.post('/api/v1/sendOrder', async (req, res) => {
  try {
    console.log(req.body)
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