import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [role, setRole] = useState()
  const [loading, setLoading] = useState(true)
  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession()
    const { session } = data
    setUser(session?.user ?? null)
    setRole(session?.user?.user_metadata?.role ?? null)
    setLoading(false)

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
    })

    return () => {
        listener?.unsubscribe()
    }
  }
  useEffect(() => {
    // Check active sessions and sets the user
    getUser().catch(console.error);
  }, [])

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
    role
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}