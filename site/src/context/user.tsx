import { createContext, useContext } from 'react';

import { useQuery } from 'react-query';

import { baseUrl } from '@/utils/url';

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
    const response = await fetch(`${baseUrl}/api/github/user/me`);

    if (!response.ok) {
      throw new Error('Problem fetching user');
    }

    const user = await response.json();
    assertIsUser(user.data);

    return user.data;
  }

  const { data: user } = useQuery<User, Error>(['user', {}], getUser);

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
