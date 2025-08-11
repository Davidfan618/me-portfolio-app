import { contactData } from '@/data/data';

export async function GET() {
  return Response.json(contactData);
}

export async function POST(request: Request) {
  const message = await request.json();
  delete message.validate;
  const newMessage = {
    id: contactData.length + 1,
    details: message,
  };
  contactData.push(newMessage);
  return new Response(JSON.stringify(newMessage), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
