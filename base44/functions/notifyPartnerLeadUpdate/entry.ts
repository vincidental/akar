import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const STATUS_LABELS = {
  approved: 'Approved',
  contacted: 'Contacted',
  proposal_sent: 'Proposal Sent',
  closed_won: 'Closed — Won 🎉',
  closed_lost: 'Closed — Lost',
};

const STATUS_MESSAGES = {
  approved: "Great news — your lead has been reviewed and approved by the Akar Systems team. We'll be reaching out to them shortly.",
  contacted: "We've made first contact with your lead. Things are moving!",
  proposal_sent: "A proposal has been sent to your lead. We're in the closing stage.",
  closed_won: "Your lead has converted into a paying client! Your commission has been logged and will be paid out within 7 business days.",
  closed_lost: "Unfortunately this lead didn't convert this time. Don't be discouraged — keep registering new leads!",
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { lead_id } = await req.json();
    if (!lead_id) return Response.json({ error: 'lead_id required' }, { status: 400 });

    const lead = await base44.asServiceRole.entities.ReferralLead.get(lead_id);
    if (!lead) return Response.json({ error: 'Lead not found' }, { status: 404 });

    const status = lead.status;
    const label = STATUS_LABELS[status];
    const message = STATUS_MESSAGES[status];

    if (!label || !lead.partner_email) {
      return Response.json({ skipped: true, reason: 'No email needed for this status or missing partner email' });
    }

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: lead.partner_email,
      subject: `Lead Update: ${lead.prospect_business} — ${label}`,
      body: `
Hi ${lead.partner_name || 'Partner'},

${message}

Lead Details:
• Prospect: ${lead.prospect_name} (${lead.prospect_business})
• Status: ${label}
${lead.commission_amount ? `• Your Commission: Rp ${lead.commission_amount.toLocaleString('id-ID')}` : ''}
${lead.admin_notes ? `• Team Note: ${lead.admin_notes}` : ''}

You can track all your leads in the Partner Portal.

Best,
Akar Systems Team
      `.trim(),
    });

    return Response.json({ success: true, notified: lead.partner_email });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});