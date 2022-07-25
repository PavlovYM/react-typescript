import { FC } from 'react'
import { IUser } from '../types/users'
import UserItem from './UserItem'

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <>
      {users.map(user =>
        <UserItem key={user.id} user={user} />
      )}
    </>
  )
}

export default UserList