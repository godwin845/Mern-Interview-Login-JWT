import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const User = ({ token }) => {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {

      const token = localStorage.getItem('token');

      if (!token) {
        setMessage('No token available');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log(response.data);

        if (response.data && response.data.fetchAllUsers) {
          setUserData(response.data.fetchAllUsers);
        } else {
          setMessage('No users found');
        }
      } catch (error) {
        console.error(error);
        setMessage('Error fetching user data');
      }
    };

    fetchData();
  }, [token]);

  const handleLogin = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogin}>Logout</button>
      <h1>Welcome User Dashboard</h1>

      {userData.length > 0 ? (
        userData.map((user) => (
          <div key={user._id}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No users available</p>
      )}
      {message}
    </div>
  )
};

export default User;
