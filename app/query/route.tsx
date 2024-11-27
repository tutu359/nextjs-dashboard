import {fetchLatestInvoices} from 'app/lib/data'

export async function GET() {
  return Response.json(
    await fetchLatestInvoices()
  );
}
