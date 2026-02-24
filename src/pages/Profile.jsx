
import { useEffect, useState } from 'react'
import { domain } from '../store/Store'
import axios from 'axios'
import UserImg from './../component/profileComponent/UserImg';
import UserForm from './../component/profileComponent/UserForm';

const Profile = () => {
  const [userInfo , setUserInfo] = useState()
  const token = localStorage.getItem("token") || sessionStorage.getItem("token")
  useEffect(()=>{
    axios.get(domain+ "/api/users/me", {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    }).then((res)=>{
      console.log(res.data)
      setUserInfo(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
     <div>
        <UserImg/>
        <UserForm userInfo={userInfo} token={token} />

     </div>
  )
}

export default Profile
