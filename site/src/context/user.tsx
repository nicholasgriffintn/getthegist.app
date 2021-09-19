import { createContext, useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

import { baseUrl } from '@/utils/url';
import db from '@/utils/db';

export type User = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

type UserDataType = {
  user: User | undefined;
};

const UserContext = createContext<UserDataType>(undefined!);

export function UserContextProvider({ children }) {
  function assertIsUser(user: any): asserts user is User {
    if (!('name' in user)) {
      throw new Error('The returned data does not match a user');
    }
  }

  async function getUser() {
    if (navigator && navigator.onLine) {
      const response = await fetch(`${baseUrl}/api/github/user/me`);

      if (!response.ok) {
        throw new Error('Problem fetching user');
      }

      const user = await response.json();
      assertIsUser(user.data);

      return user.data;
    } else {
      return await db.user.where();
    }
  }

  async function initaliseUser() {
    const userData = await getUser();

    await db.user.put(userData);

    console.log(userData);

    return userData;
  }

  const { data: user } = useQuery<User, Error>(['user', {}], initaliseUser);

  let sharedState = {
    user,
  };

  return (
    <UserContext.Provider value={sharedState}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
