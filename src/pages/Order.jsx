import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    axios
      .get(
        domain +
          "/api/orders?filters[users_permissions_user][id][$eq]=" +
          user.id +
          "&populate=*",
      )
      .then((res) => {
        setOrders(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  const statusStyles = {
    pending: "bg-violet-100 text-violet-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
    shipped: "bg-blue-100 text-blue-800",
    processing: "bg-yellow-100 text-yellow-800",
  };
  return (
    <div>
      {Orders.length === 0 ? (
        <h1 className="text-center text-2xl text-red-500 font-bold mt-10">
          No Orders Found..
        </h1>
      ) : (
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr className="text-gray-700 text-sm">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {Orders?.map((order) => (
                <tr
                  key={order.documentId}
                  className="border-b last:border-b-0 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {order.documentId}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {order.name}
                  </td>
                  <td className="py-3 px-4 text-sm text-center text-gray-700">
                    {order.qty}
                  </td>
                  <td className="py-3 px-4 text-sm text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        statusStyles[order.state?.name] ||
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.state?.name}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;
