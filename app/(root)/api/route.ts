import admins from "./db"

export async function GET() {
    return Response.json(admins)

}