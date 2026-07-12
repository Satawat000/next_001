"use client"
import React , {useState} from 'react'
import UserTable from './UserTable'
import { UserType } from '@/types/user'

type Props = {
  initialUsers: UserType[];
};


function UserTableWrapper({ initialUsers }: Props) {
  const [users, setUsers] = useState<UserType[]>(initialUsers);

  return (
    <UserTable users={users} setUsers={setUsers} />
  )
  
}

export default UserTableWrapper
