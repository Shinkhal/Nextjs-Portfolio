export async function GET() {
    const userKey = "shinkhal";
    const baseapiurl = process.env.GITHUB_BASE_API;
    const configRes = await fetch(`${baseapiurl}?userKey=${userKey}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (!configRes.ok) {
      return new Response("Failed to fetch project config", { status: 500 });
    }
  
    const githubApiUrl = process.env.GITHUB_API;
    const githubRes = await fetch(`${githubApiUrl}?userKey=${userKey}`, {
      method: 'GET',
      cache: 'no-store'
    });
  
    if (!githubRes.ok) {
      return new Response("Failed to fetch GitHub API data", { status: 500 });
    }
  
    const data = await githubRes.json();

    return Response.json(data);
  }
    