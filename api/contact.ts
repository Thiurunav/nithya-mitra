import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

interface ExtendedResponse extends ServerResponse {
  status: (statusCode: number) => ExtendedResponse;
  json: (body: any) => void;
}

export default async function handler(req: ExtendedRequest, res: ExtendedResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        // use as is
      }
    }

    const { fullName, whatsapp, email, cityInIndia, interest, notes } = body || {};

    if (!fullName || !whatsapp || !email || !cityInIndia) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.titan.email';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'info@nithyamitra.com';
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER || 'info@nithyamitra.com';

    if (!smtpPass) {
      console.warn('SMTP_PASS is not configured in environment variables.');
      return res.status(500).json({
        error: 'SMTP credentials not configured on server. Please set SMTP_PASS in environment variables.'
      });
    }

    // Configure Nodemailer with Titan / GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Notification Email to Nithya Mitra Team (info@nithyamitra.com)
    const adminMailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #F7F4ED; color: #17211F; border: 1px solid #17352F20; border-radius: 8px;">
        <div style="background-color: #17352F; color: #F7F4ED; padding: 18px 24px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="margin: 0; font-size: 20px; font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase;">
            NITHYA MITRA · New Family Consultation
          </h2>
        </div>

        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
          A new family consultation enquiry has been submitted on <strong>nithyamitra.com</strong>.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #17352F15;">
              <td style="padding: 10px 0; font-weight: bold; width: 35%; color: #17352F;">Full Name:</td>
              <td style="padding: 10px 0;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #17352F15;">
              <td style="padding: 10px 0; font-weight: bold; color: #17352F;">WhatsApp Number:</td>
              <td style="padding: 10px 0;">
                <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #25D366; font-weight: bold; text-decoration: none;">
                  ${whatsapp} ↗ (Open WhatsApp)
                </a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #17352F15;">
              <td style="padding: 10px 0; font-weight: bold; color: #17352F;">Email Address:</td>
              <td style="padding: 10px 0;">
                <a href="mailto:${email}" style="color: #17352F; text-decoration: underline;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #17352F15;">
              <td style="padding: 10px 0; font-weight: bold; color: #17352F;">Parents' Location in India:</td>
              <td style="padding: 10px 0;">${cityInIndia}</td>
            </tr>
            <tr style="border-bottom: 1px solid #17352F15;">
              <td style="padding: 10px 0; font-weight: bold; color: #17352F;">Primary Care Interest:</td>
              <td style="padding: 10px 0; color: #B86F55; font-weight: bold;">${interest || 'Not Specified'}</td>
            </tr>
            ${notes ? `
            <tr style="border-bottom: 1px solid #17352F15;">
              <td style="padding: 10px 0; font-weight: bold; color: #17352F;">Additional Notes:</td>
              <td style="padding: 10px 0;">${notes}</td>
            </tr>
            ` : ''}
          </tbody>
        </table>

        <div style="padding: 14px; background-color: #E3EBE0; border-radius: 6px; font-size: 13px; color: #17352F;">
          <strong>Next Action:</strong> Connect with ${fullName} on WhatsApp or Email within 30 minutes to confirm time and parents' neighborhood details.
        </div>
      </div>
    `;

    // 2. Automated Confirmation Email to the NRI Family Customer
    const clientMailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #F7F4ED; color: #17211F; border: 1px solid #17352F20; border-radius: 8px;">
        <div style="background-color: #17352F; color: #F7F4ED; padding: 18px 24px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="margin: 0; font-size: 20px; font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase;">
            NITHYA MITRA
          </h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; font-style: italic; color: #D8C8B3;">
            “Your Family in India, Our Responsibility.”
          </p>
        </div>

        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
          Dear ${fullName},
        </p>

        <p style="font-size: 15px; line-height: 1.6; color: #17211F; margin-bottom: 16px;">
          Thank you for reaching out to Nithya Mitra. We have received your consultation request regarding on-ground family support in <strong>${cityInIndia}</strong>.
        </p>

        <p style="font-size: 15px; line-height: 1.6; color: #17211F; margin-bottom: 20px;">
          One of our senior on-ground care coordinators in Chennai will review your family’s details and reach out to you on <strong>${whatsapp}</strong> via WhatsApp within 30 to 45 minutes to coordinate a convenient discussion time.
        </p>

        <div style="background-color: #FBFAF6; border: 1px solid #17352F15; border-radius: 6px; padding: 16px; margin-bottom: 24px; font-size: 14px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #17352F;">Your Consultation Summary:</p>
          <ul style="margin: 0; padding-left: 20px; color: #17211F80;">
            <li>Service Focus: <strong>${interest}</strong></li>
            <li>Location: <strong>${cityInIndia}</strong></li>
            <li>Format: WhatsApp / Zoom (20 Minutes, Zero Pressure)</li>
          </ul>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #17211F80; margin-bottom: 24px;">
          If you have an urgent inquiry, you can also reach our Chennai emergency coordination desk directly anytime at <strong>+91 97890 66588</strong>.
        </p>

        <div style="border-top: 1px solid #17352F15; padding-top: 16px; font-size: 13px; color: #68716D;">
          Warm regards,<br />
          <strong style="color: #17352F;">Kumaresan R. & The Nithya Mitra Team</strong><br />
          Chennai Ground Hub, Tamil Nadu, India<br />
          <a href="https://nithyamitra.com" style="color: #B86F55; text-decoration: none;">nithyamitra.com</a>
        </div>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: `"Nithya Mitra Leads" <${smtpUser}>`,
      to: receiverEmail,
      subject: `New Care Consultation: ${fullName} (${cityInIndia})`,
      html: adminMailHtml,
      replyTo: email,
    });

    // Send Customer Confirmation Email
    try {
      await transporter.sendMail({
        from: `"Nithya Mitra Coordination" <${smtpUser}>`,
        to: email,
        subject: `Your Family Support Consultation · Nithya Mitra`,
        html: clientMailHtml,
      });
    } catch (clientErr) {
      console.warn('Customer auto-reply email failed to send:', clientErr);
      // We don't fail the whole request if customer confirmation bounced
    }

    return res.status(200).json({ success: true, message: 'Consultation request submitted successfully' });
  } catch (error: any) {
    console.error('Error sending email via SMTP:', error);
    return res.status(500).json({
      error: 'Failed to send consultation request. Please try again or WhatsApp us directly.',
      details: error?.message || 'Unknown error',
    });
  }
}
