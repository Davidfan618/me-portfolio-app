import { resumeData } from '@/data/data';

export async function GET() {
  return Response.json(resumeData);
}
