export async function GET() {
    const userKey = "shinkhal";
  
    // Step 1: First, trigger refresh
    const baseurl = process.env.CODING_PLATFORM_BASE;
    await fetch(`${baseurl}?userKey=${userKey}`, {
      method: 'GET',
      cache: 'no-store' // ensure it doesn't cache the fetch
    });
  
    // Step 2: Then fetch the latest profile data
    const apiUrl = process.env.CODING_PLATFORM_API;
    const res = await fetch(`${apiUrl}?userKey=${userKey}`, {
      method: 'GET',
      cache: 'no-store'
    });
    const data = await res.json();
  
    return Response.json(data);
  }
  