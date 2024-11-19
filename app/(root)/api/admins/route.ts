import admins from "../db";

export async function GET() {
    return Response.json(admins)
}

export async function POST(request: Request) {
    const admin = await request.json();
    admins.push(admin);

    return Response.json(admins);
}