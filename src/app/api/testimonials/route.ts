import { testimonialsData } from '../../../data/data';

export async function GET() {
  return Response.json(testimonialsData);
}
