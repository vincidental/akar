import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { data } = body;

    if (!data) {
      return Response.json({ error: 'No application data provided' }, { status: 400 });
    }

    const occupationLabels = {
      student: 'Student', employed: 'Employed', freelancer: 'Freelancer',
      business_owner: 'Business Owner', consultant: 'Consultant', other: 'Other',
    };

    const networkSizeLabels = {
      small: 'Under 50', medium: '50–200', large: '200–500', massive: '500+',
    };

    const adminEmailHtml = `
      <div style="font-family: 'Inter', sans-serif; max-width: 560px; margin: 0 auto; background: #F8F6F2; padding: 32px 24px;">
        <div style="background: white; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0,0,0,0.07);">
          <div style="background: #1a1a1a; padding: 28px 32px;">
            <p style="font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Akar Systems Partner Program</p>
            <h1 style="font-family: Georgia, serif; font-size: 22px; color: white; margin: 0;">New Partner Application</h1>
          </div>
          <div style="padding: 28px 32px;">
            <p style="font-size: 14px; color: rgba(26,26,26,0.6); margin: 0 0 20px;">A new applicant has submitted a partner application and is awaiting your review.</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
              ${[
                ['Name', data.full_name],
                ['Email', data.email],
                ['Phone', data.phone],
                ['Occupation', occupationLabels[data.occupation_type] || data.occupation_type],
                ['Organisation', data.company_or_institution],
                ['Network Size', networkSizeLabels[data.network_size] || data.network_size],
              ].filter(([, v]) => v).map(([label, value]) => `
                <tr style="border-bottom: 1px solid rgba(0,0,0,0.05);">
                  <td style="padding: 8px 0; color: rgba(26,26,26,0.4); font-weight: 600; text-transform: uppercase; font-size: 10px; letter-spacing: 0.08em; width: 40%;">${label}</td>
                  <td style="padding: 8px 0; color: #1a1a1a;">${value}</td>
                </tr>
              `).join('')}
            </table>
            <p style="font-size: 12px; color: rgba(26,26,26,0.35); text-align: center; margin: 0;">Log in to the Admin Panel to review and approve or reject this application.</p>
          </div>
        </div>
      </div>
    `;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'hi@akarsystems.com',
      subject: `New Partner Application — ${data.full_name}`,
      body: adminEmailHtml,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});