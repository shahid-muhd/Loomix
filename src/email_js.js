import emailjs from "emailjs-com";

const serviceId = "service_82qk7lk";
const templateId = "template_dvqgi8o";
const publicKey = "HqY4VQ4FVY4vQm8j1";


const sendEmail = async (
  name,
  phone,
  message
 
) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
       name,
       phone,message
      },
      publicKey
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;
