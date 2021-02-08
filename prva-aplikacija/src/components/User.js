import React from 'react'

const User = (props) => {
  const { user } = props

  return <div>
    <div>Name: {user.name} </div>
    <div>Email: {user.email} </div>
    <div>Phone: {user.phone} </div>
    <div>
      {`Address: ${user.address.street} ${user.address.zipcode}`}
    </div>
  </div>
}

export default User