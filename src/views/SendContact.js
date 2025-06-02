export default class ContactTemplate {
    contactEmail = "ssupport@tasheelom.com";

    constructor(firstname, lastName, email, subject, message) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    render() {
        return `
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <meta name="x-apple-disable-message-reformatting">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .header img {
                    width: 150px;
                    max-width: 150px;
                    margin-bottom: 10px;
                }
                    img {
                    width: 150px;
                    max-width: 150px;
                    margin-bottom: 10px;
                }
                .header h1 {
                    font-size: 24px;
                    color: #333;
                    margin: 0;
                }
                .content {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
                .content p {
                    margin-bottom: 10px;
                }
                .content .note {
                    font-size: 14px;
                    color: #666;
                }
                .footer {
                    font-size: 14px;
                    text-align: center;
                    margin-top: 30px;
                    color: #999;
                }
                .footer a {
                    color: #007BFF;
                    text-decoration: none;
                }
                .footer a:hover {
                    text-decoration: underline;
                }
                .signature {
                    font-size: 14px;
                    text-align: left;
                    margin-top: 20px;
                }
                .signature p {
                    margin: 5px 0;
                }
                .signature a {
                    color: #007BFF;
                    text-decoration: none;
                }
                .signature a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://tasheelom.com/logo.png" alt="tas-heel Logo" />
                    <h1>New Contact Request from Client</h1>
                </div>
                <div class="content">
                    <p><strong>Email:</strong> ${this.email}</p>
                    <p><strong>Subject:</strong> ${this.subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${this.message}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                    <p class="note">If you did not initiate this request, please ignore this message.</p>
                </div>

            

                <div class="footer">
                    <p>If you have any questions, feel free to contact us at <a href="mailto:support@tasheelom.com">support@tasheelom.com</a>.</p>
                    <p>Thank you, <br>The Tas-Heel Team</p>
                </div>
            </div>
        </body>
        </html>
        `;
    }
}


{/* <div class="signature">
    <p>
        Dora Bill<br>
            Support Specialist<br>
               Tas-Heel<br>
                    ✉️ <a href="mailto:support@tasheelom.com">support@tasheelom.com</a><br>
                        🌐 <a href="https://www.tasheelom.com">www.tasheelom.com</a>
                    </p>
                </div> */}