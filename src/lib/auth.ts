import { cookies } from 'next/headers'
import {jwtDecode} from 'jwt-decode'

interface User {
  sub: string;
  name: string;
  avatar: string;
}

export async function getUser(): Promise<User> {
  const token = (await cookies()).get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user: User = jwtDecode(token)

  return user

}