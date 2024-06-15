import React, { useState } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
  const [isStudent, setStudent] = useState(true);
  const [isDivVisible, setDivVisible] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
      navigate('/');
      toast.success('Login Success');
    }).catch((err) => {
      console.log(err);
      toast.error('Login Failed');
    });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
        toast.success('Registration Success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error('Registration Failed');
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
        toast.success('Login Success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error('Login Failed');
      });
  };

  const setTrueForStudent = () => {
    setStudent(false);
  };

  const setFalseForStudent = () => {
    setStudent(true);
  };

  const showLogin = () => {
    setDivVisible(true);
  };

  const closeLogin = () => {
    setDivVisible(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign-up and Apply For Free</h1>
        <p className="text-center text-gray-600 mb-6">1,50,000+ companies hiring on Internshala</p>
        <div className="flex flex-col items-center mb-6">
          <button 
            onClick={handleSignIn} 
            className="flex items-center justify-center w-full h-10 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            <svg className="h-6 w-6 mr-3" viewBox="0 0 40 40">
              {/* SVG content */}
            </svg>
            Sign in with Google
          </button>
        </div>
        <p className="text-center text-xs text-gray-500 mb-4">OR</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <button 
            className={`py-2 px-4 rounded ${isStudent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} mr-2`} 
            onClick={setFalseForStudent}
          >
            I'm a student
          </button>
          <button 
            className={`py-2 px-4 rounded ${!isStudent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} 
            onClick={setTrueForStudent}
          >
            I'm an employer
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleRegister}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
