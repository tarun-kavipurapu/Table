import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export async function mailSend(userEmail: string, arrayBody: any[]) {
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
      name: "Sir/Madam",
      intro: "Data of the Persons is as follows:",
      table: {
        data: arrayBody.map((item) => ({
          id: item.original.serial, // Using serial as description, you can change this as needed
          name: item.original.name,
          email: item.original.email,
          phone: item.original.phone,
          hobbies: item.original.hobbies, // Using phone as price, you can change this as needed
        })),
      },
      outro: "Looking forward for accepting",
    },
  };

  let mail = mailGenerator.generate(response);

  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Persons Data",
    html: mail,
  };

  const info = await transporter.sendMail(message);

  return info;
}
