import { NextResponse } from "next/server";
import {Resend} from 'resend'

const resend = new Resend('re_ipMGRMZs_7F7SP7Dcb2XFjwTHLQvaoMiY');

export async function POST (request){
    const data = await request.json();

    console.log("data received in backend:",data);

    const {name,email,contact,message,service} = data;
    
    try {
        await resend.emails.send({
            from: "Invictus Global Tech <onboarding@resend.dev>",
            to: "contact.invictusglobaltech@gmail.com",
            subject: "New message from Invictus",
            reply_to: email,
            html: `<h3> ${name} sent a message on Invictus  :</h3>
            <p>The senders email is: ${email}</p>
            <p>The Sender Mobile no is :${contact}</p> <br/> 
            <p>The message is: ${message}</p>
            <p>Service Required is: ${service}</p>
                `,
        });
        } catch (e) {
            console.error(e);
            return NextResponse.json({
                "success":false,
                "error":e
            })
        }
    
    return NextResponse.json({
        "success":true
    })
}
// const resend = new Resend("re_ZhujN9je_83ZB2QKqFwnBBJsaE4v2nDwq");
// export async function sendEmail(formData: FormData) {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");
//   const phno = formData.get("Phonenumber");
//   const name = formData.get("name");

//   if (!message || typeof message !== "string" || message.length > 5000) {
//     return {
//       status: 400,
//       error: "Invalid message",
//     };
//   }
//   if (
//     !senderEmail ||
//     typeof senderEmail !== "string" ||
//     senderEmail.length > 500
//   ) {
//     return {
//       status: 400,
//       error: "Invalid email",
//     };
//   }
//   let data;
//   try {
//     data = await resend.emails.send({
//       from: "Invictus Global Tech <onboarding@resend.dev>",
//       to: "responses.qriocity@gmail.com",
//       subject: "New message from Invictus",
//       reply_to: senderEmail,
//       html: `<h3> ${name} sended a message on Resnet  :</h3>
//        <p>The senders email is: ${senderEmail}</p> <br/> 
//        <p>The Sender Mobile no is :${phno}</p> <br/> 
//        <p>The message is: ${message}</p>
//             `,
//     });
//   } catch (e: unknown) {
//     console.error(e);
//     return {
//       status: 500,
//       error: "Something went wrong",
//     };
//   }
//   return { data };
// }