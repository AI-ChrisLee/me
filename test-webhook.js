// Test webhook for Zapier integration
async function testWebhook() {
  console.log('🧪 Testing Zapier Webhook...\n');

  try {
    const response = await fetch('http://localhost:3000/api/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        firstName: 'John'
      })
    });

    console.log('📊 Status:', response.status);
    const data = await response.json();
    console.log('📋 Response:', JSON.stringify(data, null, 2));

    if (response.ok) {
      console.log('\n✅ SUCCESS! Webhook ready for Zapier');
      console.log('🔗 Use this endpoint in Zapier: /api/webhook');
    } else {
      console.log('\n❌ FAILED');
    }

  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

testWebhook(); 