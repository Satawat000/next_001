import { getUsers ,createUser } from "@/services/user";

export async function GET(){
    const res = await getUsers();
    if(!res){
        return new Response("Failed to fetch data", {status: 500});
    }
    return new Response(JSON.stringify(res), {status: 200});
}

export async function POST(request: Request){
    const body = await request.json();
    const res = await createUser(body);
    return new Response(JSON.stringify(res), {status: 201});
}