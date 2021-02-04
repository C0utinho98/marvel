import { Reducer } from 'redux';
import { IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  name: '',
  signed: false,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HANDLE_LOGIN': {
      return {
        name: action.payload.name,
        signed: !state.signed,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
