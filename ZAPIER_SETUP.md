# Zapier + LeadConnector Setup Guide

## 🎯 Overview
Your website captures leads and sends them to Zapier, which automatically creates contacts in GoHighLevel using the LeadConnector app.

## 🔄 Simple Flow
```
Homepage Form → Webhook → Zapier → LeadConnector → GoHighLevel
```

---

## 🛠️ Zapier Setup (5 Minutes)

### Step 1: Create New Zap
1. Go to [Zapier.com](https://zapier.com)
2. Click **"Create Zap"**
3. Name it: **"Website to GoHighLevel"**

### Step 2: Set Up Trigger (Webhooks)
1. **Search for**: `Webhooks by Zapier`
2. **Choose Event**: `Catch Hook`
3. **Copy the webhook URL** (you'll need this)
4. **Test**: Click "Test trigger" (we'll test later)


https://hooks.zapier.com/hooks/catch/23390102/uoym645/

### Step 3: Set Up Action (LeadConnector)
1. **Search for**: `LeadConnector`
2. **Choose Event**: `Create Contact`
3. **Connect Account**: Sign in to your GoHighLevel account
4. **Set up Contact**:
   - **First Name**: `first_name` (from webhook data)
   - **Email**: `email` (from webhook data) 
   - **Source**: `source` (from webhook data)
   - **Tags**: `tags` (from webhook data)
   - **Location**: Select your GHL location

### Step 4: Test & Activate
1. **Test the Action**: Make sure it creates a contact
2. **Turn on Zap**: Activate the automation
3. **Done!** 🎉

---

## 📍 Your Webhook Data Structure

Zapier will receive this data from your website:
```json
{
  "first_name": "John",
  "email": "john@example.com", 
  "source": "Homepage Form",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "tags": "Website Lead, Vibe Coding Interest, High Priority",
  "lead_type": "vibe_coding_inquiry"
}
```

---

## 🔗 Connect Your Website

### Your Webhook Endpoint:
**Website URL**: `https://your-domain.com/api/webhook`

### Get Zapier Webhook URL:
1. Copy the webhook URL from Step 2 above
2. You can either:
   - **Option A**: Use it directly in a separate workflow
   - **Option B**: Update your website to send to both (optional)

### Optional: Send to Both Your API and Zapier
Update your webhook to also send to Zapier:

```typescript
// In your webhook route.ts (optional)
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/...';

// After processing, also send to Zapier
try {
  await fetch(ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData)
  });
} catch (error) {
  console.log('Zapier webhook failed:', error);
}
```

---

## 🧪 Testing

### Test the Full Flow:
1. **Submit form** on your homepage
2. **Check Zapier logs** in your dashboard
3. **Verify contact** appears in GoHighLevel
4. **Check tags** are applied correctly

### Debug Tips:
- **Zapier History**: Check "Task History" for errors
- **Website Console**: Check for webhook logs
- **GoHighLevel**: Verify contact creation
- **Use unique emails** to avoid duplicates

---

## 🚀 Advanced Zapier Features

### Add More Actions:
- **Gmail**: Send notification email to your team
- **Slack**: Post new lead alerts to your channel  
- **Google Sheets**: Log leads in a spreadsheet
- **Calendly**: Auto-book strategy calls

### LeadConnector Features:
- **Add to Pipeline**: Automatically add opportunities
- **Trigger Campaigns**: Start email sequences
- **Create Tasks**: Assign follow-up tasks
- **Update Custom Fields**: Add lead scoring data

### Filters & Conditions:
- **Filter by email domain**: Route different leads
- **Lead scoring**: Add high-value leads to priority pipeline
- **Time-based**: Different actions for business hours

---

## ✅ Quick Checklist:

- [ ] Zapier account connected
- [ ] Webhook trigger set up
- [ ] LeadConnector action configured
- [ ] GoHighLevel account connected
- [ ] Test lead submitted successfully
- [ ] Contact appears in GoHighLevel with correct tags
- [ ] Zap is turned ON and active

## 🎉 You're Done!

Your website now automatically captures leads and adds them to GoHighLevel via Zapier. No coding, no API keys, just simple automation!

**Webhook URL**: `https://your-domain.com/api/webhook`
**Test it**: Submit a form and watch the magic happen! 