import React, { type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Navigate } from 'react-router';

interface IProps {
  Route: string;
  Child:ReactNode;
}

function ProtectedRoute({Route , Child} : IProps) {
  const {user} = useSelector((state : RootState) => state.User)
  if((Route === "login" || Route === "register") && user){
    return <Navigate to={"/"} />
  }

  if(Route === "dashboard" && user?.role !== "Admin"){
    return <Navigate to={"/"} />
  }
  return Child
}

export default ProtectedRoute