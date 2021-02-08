import React, { useEffect, useState } from 'react'
import User from './User.js'

const Users = () => {
  const [usersList, setUsersList] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const htmlList = data.map((user, i) => <User key={i} user={user} />)
        setUsersList(htmlList)
      })
  }, [])

  // re-render when state is changed
  return <div>
    {!usersList ? <div>loading...</div> : <div>{usersList}</div>}
  </div>
}

export default Users