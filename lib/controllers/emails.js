const { Router } = require('express');
const EmailService = require('../services/Email.js');

module.exports = Router().post('/', async (req, res) => {
  const emailResponse = await EmailService.sendEmail(req.body);

  res.json(emailResponse);
});
