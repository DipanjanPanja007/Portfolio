import { sendMail } from "../config/sendMail.js";

const sendMailController = async (req, res) => {
  try {
    const { email, message, subject } = req.body;

    console.log(email, message, subject);

    // ✅ Validation
    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required",
      });
    }
    

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send message, Please try again later",      
    });
  }
};

export { sendMailController };