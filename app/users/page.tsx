import {UserType} from "@/types/user";
import UserTableWrapper from "./components/UserTableWrapper";


async function getUsers(): Promise<UserType[]>{
  const response = await fetch("http://localhost:3000/api/users",{
    cache:"no-cache",
  })

  if(!response){
    throw new Error("Failed to fetch data");
  }
  return response.json();
}


async function Users() {
  const users = await getUsers();
  return (
    <main className="p-8">
      <h1 className=" text-5xl font-semibold text-[#94A3BB]">
        List of Users
      </h1>
      <UserTableWrapper initialUsers={users}/>
    </main>
  )
  
  
}

export default Users;
