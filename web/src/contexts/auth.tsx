import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { signIn } from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  handleAuthentication(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const history = useHistory();

  useEffect(() => {

    const storagedUser = localStorage.getItem('user');
    const storagedToken = localStorage.getItem('token');

    if(storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      console.log('Peguei')
    }
  }, []);

  async function handleAuthentication() {
    const response = await signIn();

    setUser(response.user);

    localStorage.setItem('user', JSON.stringify(response.user));
    localStorage.setItem('token', response.token);
    history.replace('/landing');
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, handleAuthentication}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;