import React from 'react'
import UpdateUser from './UpdateUser'
import UserData from './UserData'

const Profile = () => {

  // для логаута
  const handleClickLogout = () => {
    alert('Logout:')
  }
  return (
    <div>
      
      <UserData />
      <button onClick={handleClickLogout}>Logout</button>
      <UpdateUser />


    </div>
  )
}

export default Profile