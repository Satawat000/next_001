import { getUserById } from "@/services/user";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: Request, {params}: Props) {
    const {id} = await  params;
    const res = await getUserById(Number(id));
    if(!res){
        return new Response("Failed to fetch data", {status: 500});
    }
    return new Response(JSON.stringify(res), {status: 200}); 
}