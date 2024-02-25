import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export async function mailSend(userEmail: string) {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Mailgen",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: "Tarun",
      intro: "Internship test mail",
      table: {
        data: [
          {
            name: "Nodemailer Stack Book",
            description: "A Backend application",
            price: "$10.99",
          },
        ],
      },
      outro: "Looking forward to doing more business",
    },
  };

  let mail = mailGenerator.generate(response);

  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Place Order",
    html: mail,
  };

  const info = await transporter.sendMail(message);

  return info;
}
