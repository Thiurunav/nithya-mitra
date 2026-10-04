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

    const smtpHost = process.env.SMTP_HOST || 'smtpout.secureserver.net';
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

    const cleanPhone = whatsapp.replace(/[^0-9]/g, '');
    const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${fullName}, this is Kumaresan from Nithya Mitra in Chennai regarding your family consultation request.`)}`;
    const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';

    // 1. Notification Email to Nithya Mitra Operations Team (info@nithyamitra.com)
    const adminMailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Family Consultation Lead</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #EFECE6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #EFECE6; padding: 32px 12px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #FAF8F5; border-radius: 8px; overflow: hidden; border: 1px solid #17352F18; box-shadow: 0 4px 18px rgba(23, 53, 47, 0.06);">
                
                <!-- Header Banner -->
                <tr>
                  <td style="background-color: #17352F; padding: 28px 32px; text-align: left;">
                    <div style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #D8C8B3; font-weight: 600; margin-bottom: 6px;">
                      NITHYA MITRA · OPERATIONS DESK
                    </div>
                    <h1 style="margin: 0; font-family: Georgia, serif; font-size: 24px; color: #F7F4ED; font-weight: normal; letter-spacing: 0.02em;">
                      New Family Consultation Request
                    </h1>
                  </td>
                </tr>

                <!-- Priority Status Bar -->
                <tr>
                  <td style="background-color: #E3EBE0; padding: 14px 32px; border-bottom: 1px solid #17352F15;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size: 13px; font-weight: 600; color: #17352F;">
                          ● Action Needed · Reach out within 30 minutes
                        </td>
                        <td align="right" style="font-size: 12px; color: #17352F99;">
                          ${submissionTime}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 32px;">

                    <!-- Quick Action Buttons -->
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                      <tr>
                        <td style="padding-right: 8px; width: 50%;">
                          <a href="${waLink}" target="_blank" style="display: block; background-color: #25D366; color: #FFFFFF; font-weight: 600; font-size: 13px; text-align: center; text-decoration: none; padding: 14px 16px; border-radius: 6px;">
                            Chat on WhatsApp ↗
                          </a>
                        </td>
                        <td style="padding-left: 8px; width: 50%;">
                          <a href="mailto:${email}" style="display: block; background-color: #17352F; color: #F7F4ED; font-weight: 600; font-size: 13px; text-align: center; text-decoration: none; padding: 14px 16px; border-radius: 6px;">
                            Reply via Email ↗
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Lead Details Card -->
                    <div style="background-color: #FFFFFF; border: 1px solid #17352F15; border-radius: 6px; padding: 22px 24px; margin-bottom: 24px;">
                      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #B86F55; margin-bottom: 16px;">
                        Family Information
                      </div>

                      <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.6;">
                        <tr>
                          <td style="padding: 9px 0; color: #68716D; width: 36%; vertical-align: top;">Client Name</td>
                          <td style="padding: 9px 0; color: #17211F; font-weight: 600;">${fullName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #68716D; vertical-align: top;">WhatsApp Mobile</td>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #17211F; font-weight: 600;">
                            <a href="${waLink}" style="color: #17352F; text-decoration: underline;">${whatsapp}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #68716D; vertical-align: top;">Email Address</td>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #17211F; font-weight: 600;">
                            <a href="mailto:${email}" style="color: #17352F; text-decoration: underline;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #68716D; vertical-align: top;">Parents Location</td>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #17211F; font-weight: 600;">${cityInIndia}</td>
                        </tr>
                        <tr>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #68716D; vertical-align: top;">Primary Service</td>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #B86F55; font-weight: 600;">${interest || 'General Family Support'}</td>
                        </tr>
                        ${notes ? `
                        <tr>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #68716D; vertical-align: top;">Specific Details</td>
                          <td style="padding: 9px 0; border-top: 1px solid #17352F10; color: #17211F;">${notes}</td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>

                    <!-- SOP Reminder -->
                    <div style="background-color: #FAF5F0; border-left: 3px solid #B86F55; padding: 14px 18px; border-radius: 0 4px 4px 0; font-size: 13px; color: #17211F; line-height: 1.5;">
                      <strong>Consultation Protocol:</strong> Review parents' neighborhood in ${cityInIndia} before connecting. Send initial warm greeting message via WhatsApp to coordinate a suitable call time.
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 32px; background-color: #F2EFE9; border-top: 1px solid #17352F15; font-size: 12px; color: #68716D; text-align: center;">
                    Nithya Mitra Internal Dispatch System · Chennai Operations Hub<br />
                    Direct emergency coordination line: +91 97890 66588
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 2. Automated Elegant Confirmation Email to the NRI Family Client
    const clientMailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Family Support Consultation · Nithya Mitra</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #EFECE6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #EFECE6; padding: 32px 12px;">
          <tr>
            <td align="center">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #FAF8F5; border-radius: 8px; overflow: hidden; border: 1px solid #17352F18; box-shadow: 0 4px 18px rgba(23, 53, 47, 0.06);">
                
                <!-- Elegant Header -->
                <tr>
                  <td style="background-color: #17352F; padding: 32px; text-align: center;">
                    <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #D8C8B3; font-weight: 600; margin-bottom: 8px;">
                      FAMILY SUPPORT & GROUND PRESENCE
                    </div>
                    <h1 style="margin: 0; font-family: Georgia, serif; font-size: 26px; color: #F7F4ED; font-weight: normal; letter-spacing: 0.06em;">
                      NITHYA MITRA
                    </h1>
                    <div style="font-family: Georgia, serif; font-style: italic; font-size: 13px; color: #D8C8B3; margin-top: 6px;">
                      “Your Family in India, Our Responsibility.”
                    </div>
                  </td>
                </tr>

                <!-- Body Copy -->
                <tr>
                  <td style="padding: 36px 32px 28px 32px;">

                    <p style="font-family: Georgia, serif; font-size: 19px; color: #17352F; margin: 0 0 18px 0; font-weight: normal;">
                      Dear ${fullName},
                    </p>

                    <p style="font-size: 15px; line-height: 1.7; color: #17211F; margin: 0 0 16px 0;">
                      Thank you for reaching out to Nithya Mitra. We have safely received your consultation request regarding your parents and family in <strong>${cityInIndia}</strong>.
                    </p>

                    <p style="font-size: 15px; line-height: 1.7; color: #17211F; margin: 0 0 24px 0;">
                      Living abroad while caring for aging parents is deeply personal. You will never encounter automated call centers or generic treatment with us. One of our senior on ground coordinators in Chennai will personally message you on WhatsApp at <strong>${whatsapp}</strong> within 30 to 45 minutes to align on a convenient discussion time for your timezone.
                    </p>

                    <!-- Summary Card -->
                    <div style="background-color: #FFFFFF; border: 1px solid #17352F15; border-radius: 6px; padding: 22px 24px; margin-bottom: 24px;">
                      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #B86F55; margin-bottom: 14px;">
                        Consultation Overview
                      </div>

                      <table width="100%" border="0" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.6;">
                        <tr>
                          <td style="padding: 7px 0; color: #68716D; width: 38%;">Primary Care Focus</td>
                          <td style="padding: 7px 0; color: #17352F; font-weight: 600;">${interest || 'Family Wellbeing'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 7px 0; border-top: 1px solid #17352F10; color: #68716D;">Parents Location</td>
                          <td style="padding: 7px 0; border-top: 1px solid #17352F10; color: #17352F; font-weight: 600;">${cityInIndia}</td>
                        </tr>
                        <tr>
                          <td style="padding: 7px 0; border-top: 1px solid #17352F10; color: #68716D;">Discussion Format</td>
                          <td style="padding: 7px 0; border-top: 1px solid #17352F10; color: #17352F;">20 Minute WhatsApp or Video Call (Zero pressure)</td>
                        </tr>
                      </table>
                    </div>

                    <!-- Direct Instant WhatsApp Button -->
                    <div style="text-align: center; margin: 28px 0;">
                      <a href="https://wa.me/919789066588?text=${encodeURIComponent(`Hello Nithya Mitra, I have submitted a consultation request for ${fullName} in ${cityInIndia}.`)}" target="_blank" style="display: inline-block; background-color: #17352F; color: #F7F4ED; font-weight: 600; font-size: 13px; text-decoration: none; padding: 14px 28px; border-radius: 4px; letter-spacing: 0.05em;">
                        Message Chennai Hub on WhatsApp ↗
                      </a>
                    </div>

                    <!-- Emergency Assistance Box -->
                    <div style="background-color: #FAF5F0; border-left: 3px solid #B86F55; padding: 16px 20px; border-radius: 0 4px 4px 0; font-size: 13px; color: #17211F; line-height: 1.6; margin-bottom: 28px;">
                      <strong style="color: #B86F55;">Immediate Emergency in Chennai?</strong><br />
                      If your parents require urgent hospital escort or immediate on ground attention, call or message our Chennai emergency coordination desk directly anytime at <strong>+91 97890 66588</strong>.
                    </div>

                    <!-- Warm Founder Signoff -->
                    <div style="border-top: 1px solid #17352F15; padding-top: 22px; font-size: 14px; line-height: 1.6; color: #17211F;">
                      Warm regards,<br />
                      <strong style="color: #17352F; font-size: 15px;">Kumaresan R.</strong><br />
                      <span style="color: #68716D; font-size: 13px;">Founder & Operations Lead</span><br />
                      <span style="color: #68716D; font-size: 13px;">Nithya Mitra · Dedicated Ground Presence for NRI Families</span><br />
                      <span style="color: #68716D; font-size: 13px;">Chennai Hub, Tamil Nadu, India</span><br />
                      <a href="https://nithyamitra.com" style="color: #B86F55; text-decoration: none; font-size: 13px; font-weight: 600;">nithyamitra.com</a>
                    </div>

                  </td>
                </tr>

                <!-- Minimalist Footer -->
                <tr>
                  <td style="padding: 20px 32px; background-color: #F2EFE9; border-top: 1px solid #17352F15; font-size: 12px; color: #68716D; text-align: center; line-height: 1.5;">
                    Nithya Mitra · Ground Care Services for NRI Families<br />
                    Chennai, Tamil Nadu, India
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: `"Nithya Mitra Leads" <${smtpUser}>`,
      to: receiverEmail,
      subject: `New Consultation · ${fullName} (${cityInIndia})`,
      html: adminMailHtml,
      replyTo: email,
    });

    // Send Customer Confirmation Email
    try {
      await transporter.sendMail({
        from: `"Nithya Mitra" <${smtpUser}>`,
        to: email,
        subject: `Your Family Support Consultation · Nithya Mitra`,
        html: clientMailHtml,
      });
    } catch (clientErr) {
      console.warn('Customer auto-reply email failed to send:', clientErr);
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
