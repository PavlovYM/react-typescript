import { FC } from 'react'
import { IUser } from '../types/users'

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className='card-user'>
      <strong>{user.id}. {user.name}</strong>
      <p>{user.email}</p>
      <p>{user.address.city}, {user.address.street}</p>
      <i>{user.address.zipcode}</i>
    </div>
  )
}

export default UserItem