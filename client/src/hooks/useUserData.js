import { useState } from 'react'

export default function useUserData(initialUser) {
  const [user, setUser] = useState(initialUser)

  return {
    userId: user ? user.user_id : null,
    userName: user ? user.user_name : null,
    setUser
  };
};