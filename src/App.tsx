import axios from "axios"
import { useEffect, useState } from "react"
import EventsExample from "./components/EventsExample"
import List from "./components/List"
import UserItem from "./components/UserItem"

import { IUser } from "./types/users"

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=2')
    setUsers(response.data)
  }

  return (
    <div className="container">
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <EventsExample/>
    </div>
  )
}

export default App