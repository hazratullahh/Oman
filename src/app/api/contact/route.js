import sendMail from '@/lib/sendMail';

export async function POST(req) {
  try {
    const data = await req.json();

    await sendMail({
      to: "support@tasheelom.com",
      from: data.email,
      subject: `Tas-Heel - Received New Contact From ${data.firstName} ${data.lastName}!`,
      html: data.html, // pass the rendered template html here
      replyTo: data.email,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
