import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Feature/Userslice';
import { Link } from 'react-router-dom';

function Profile() {
  const user = useSelector(selectUser);
  
  return (
    <div className="flex items-center justify-center mt-12 mb-6">
      <div className="max-w-xs w-full">
        <div className="bg-white shadow-lg rounded-lg py-6">
          <div className="photo-wrapper p-4">
            <img src={user.photo} alt="User Profile" className="w-32 h-32 rounded-full mx-auto" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
          </div>
          <div className="text-center p-4">
            <h3 className="text-lg font-bold text-gray-700">UID</h3>
            <p className="text-gray-900">{user.uid}</p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-lg font-bold text-gray-700">Email</h3>
            <p className="text-gray-900">{user.email}</p>
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/userapplication" className="relative inline-block px-5 py-3 font-medium bg-blue-600 text-white rounded-full transition-all duration-200 hover:bg-white hover:text-blue-600 group">
              <span className="absolute inset-0 transition-all duration-100 ease-linear border-0 rounded-full group-hover:border-[25px] group-hover:border-white"></span>
              <span className="relative transition-colors duration-200 ease-in-out">View Applications</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
