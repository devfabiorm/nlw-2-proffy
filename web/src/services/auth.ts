interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sahdsuabdianbdiaudhaidhaykghuku',
        user: {
          name: 'Fabio Ribeiro Martins',
          email: 'fabio.ribeiro-martins@live.com'
        }
      })
    }, 2000);
  });
}