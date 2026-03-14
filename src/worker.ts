export default {
  async fetch(request: Request, env: any, ctx: any) {
    const url = new URL(request.url);
    
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const botField = formData.get('bot-field');
        
        if (botField) {
          return new Response(JSON.stringify({ success: false, message: 'Bot detected' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }
        
        console.log('Form submission received:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Sending email to: hola@solucionai.cl');
        
        return new Response(JSON.stringify({ success: true, message: 'Form submitted successfully' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'Error processing form' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
    
    return new Response("Static site is being generated", { status: 200 });
  },
};
