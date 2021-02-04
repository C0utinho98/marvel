import { Reducer } from 'redux';
import { IModalState } from './types';

const INITIAL_STATE: IModalState = {
  open: false,
};

const modal: Reducer<IModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL': {
      return {
        open: !state.open,
      };
    }
    default: {
      return state;
    }
  }
};

export default modal;
