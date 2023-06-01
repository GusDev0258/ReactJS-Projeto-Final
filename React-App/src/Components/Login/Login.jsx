import React from 'react'
import {Routes, Route} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="register" element={<LoginRegister />} />
        <Route path="recover-password" element={<LoginRecoverPassword />} />
        <Route path="reset-password" element={<LoginResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login