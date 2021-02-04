import { IAuthState } from './types';

interface response {
  type: string;
  payload?: IAuthState;
}

export function handleLogin(data: IAuthState): response {
  return {
    type: 'HANDLE_LOGIN',
    payload: data,
  };
}
