import admins from "../../db";

export async function PUT(request: Request, context: { params: { id: string } }) {
    const id = +context.params.id;
    const admin = await request.json();

    const index = admins.findIndex((a) => a.id === id)
    admins[index] = admin;
    return Response.json(admins)
}

export async function Delete(request: Request, context: { params: { id: string } }) {
    const id = +context.params.id;

    const index = admins.findIndex((a) => a.id === id)
    admins.splice(index, 1);
    return Response.json(admins);
}