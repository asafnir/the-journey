import { useState, useEffect } from 'react'
import MainLayout from "layouts/MainLayout"
import { supabase } from 'lib/supabaseClient'
import { useAuth } from '../contexts/Auth'

const Account = ({ session }) => {
  const { user, role } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAccount()
  }, [])

  const getAccount = async () => {
    try {
      setLoading(true)
      console.log(user)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const updateArtistProfile = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const updates = {}
      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <div aria-live="polite">
        <p>Email: { user.email}</p>
        <div>
          <button className="button primary block" disabled={loading}>
            Update profile
          </button>
        </div>
        
      </div>
    </MainLayout>
  )
}

export default Account