import { useState } from 'react'

export default function useUserData(initialUser) {
  const [user, setUser] = useState(initialUser)

  return {
    userId: user.id || null,
    userName: user.name || null,
    setUser
  };
};