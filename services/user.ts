import { users } from "@/data/userList";
import { UserType } from "@/types/user";

export async function getUsers(){
    return  users;
}

export async function getUserById(id:number){
    const user = users.find((user)=> user.id === id);
    if(!user){
        throw new Error(`User with id ${id} not found`);
    }
    return user;
}

export async function createUser(user: Omit<UserType, "id">){
    const newUser: UserType = {
        id: users.length + 1,
        ...user
    }
    users.push(newUser);
    return newUser;
}

