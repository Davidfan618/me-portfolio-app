import { servicesData } from '@/data/data';

export async function GET() {
  return Response.json(servicesData);
}
