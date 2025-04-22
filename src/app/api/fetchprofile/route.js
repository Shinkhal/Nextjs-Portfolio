
export async function GET() {
    const apiUrl = process.env.CODING_PLATFORM_API;
    const res = await fetch(`${apiUrl}?userKey=shinkhal`);
    const data = await res.json();
  
    return Response.json(data);
}

  