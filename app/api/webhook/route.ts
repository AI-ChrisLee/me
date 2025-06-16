import { NextRequest, NextResponse } from 'next/server';

// Zapier Webhook for Lead Capture → GoHighLevel
export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    // Validate required fields
    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      );
    }

    // Clean and prepare lead data for Zapier
    const leadData = {
      first_name: firstName.trim(),
      email: email.trim().toLowerCase(),
      source: 'Homepage Form',
      timestamp: new Date().toISOString(),
      tags: 'Landingpage',
      lead_type: 'vibe_coding_inquiry'
    };

    // Log the lead for tracking
    console.log('📨 Zapier Lead:', leadData);

    // Send to Zapier webhook
    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/23390102/uoym645/';
    
    try {
      const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });

      if (zapierResponse.ok) {
        console.log('✅ Successfully sent to Zapier');
      } else {
        console.log('⚠️ Zapier webhook failed:', zapierResponse.status);
      }
    } catch (error) {
      console.log('⚠️ Zapier webhook error:', error);
    }

    // Zapier will automatically:
    // 1. Receive this webhook data
    // 2. Use LeadConnector module to create contact in GoHighLevel
    // 3. Add to pipeline and assign tags
    // 4. Trigger any additional automations

    return NextResponse.json({
      success: true,
      message: 'Lead captured and sent to Zapier successfully',
      data: leadData
    });

  } catch (error) {
    console.error('❌ Zapier Webhook Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to test webhook
export async function GET() {
  return NextResponse.json({
    message: 'GoHighLevel Webhook Endpoint is working',
    timestamp: new Date().toISOString()
  });
} 