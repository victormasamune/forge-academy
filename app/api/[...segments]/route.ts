import { env } from 'cloudflare:workers';
import { createApi } from '../../../server/api.mjs';
import courses from '../../../server/course-index.json';
import assessments from '../../../server/assessments.json';

export const dynamic = 'force-dynamic';
function handle(request: Request) {
  return createApi({db:env.DB,courses,assessments,dev:import.meta.env.DEV})(request);
}
export const GET=handle;
export const POST=handle;
export const PUT=handle;
