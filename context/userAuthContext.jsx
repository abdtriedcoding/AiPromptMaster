'use client'
import { account } from "@/lib/appwriteConfig";
import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";

const UserAuthContext = createContext();

export default function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Google SignIn Function
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      // Authenticate the user
      account.createOAuth2Session('google', 'http://localhost:3000');
    } catch (error) {
      console.log(error);
    }
  }

  // Email signing function
  const emailSign = async (e,email,password) => {
    e.preventDefault();
    try {
      await account.create("unique()", email, password);
      await account.createEmailSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  const emailSignUp = async (e,email,password) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to Fetch user from appwrite.
  const fetchUser = async () => {
    try {
      const data = await account?.get();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, [])

  // Function to logout user.
  const userLogout = async () => {
    await account.deleteSession("current");
    setUser(null)
  }

  return (
    <UserAuthContext.Provider value={{ signInWithGoogle, user, setUser, userLogout,emailSign, emailSignUp }}>{children}</UserAuthContext.Provider>
  )
}

export const useAuth = () => useContext(UserAuthContext)