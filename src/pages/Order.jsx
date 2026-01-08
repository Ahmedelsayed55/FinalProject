import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const domain = "http://localhost:1337";
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
       if (!user || !token) {
      navigate("/login");
      return;
    }
    axios.get(domain + "/api/orders?filters[users_permissions_user][id][$eq]=" + user.id + "&populate=*").then((res) => {
      setOrders(res.data.data);
    //   console.log(res.data.data);
    })
  }, [])
  return (
    <div>
      {Orders?.map((order) => (
        <div key={order.documentId} className="p-4 m-4 border border-violet-500 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Order ID: {order.documentId}</h2>
          <p className="text-lg">Name: {order.name}</p>
          <p className="text-lg">Quantity: {order.qty}</p>
          <p className="text-lg">Status: {order.state?.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Order
