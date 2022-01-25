const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = class EmailService {
  static async sendEmail(msg) {
    try {
      await sgMail.send(msg);
    } catch (err) {
      throw new Error(err);
    }
  }
};
