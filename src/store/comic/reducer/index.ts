import { Reducer } from 'redux';
import { IComicState } from './types';

const INITIAL_STATE: IComicState = {
  comicsSelecteds: [],
};

const comic: Reducer<IComicState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'COMIC_SELECTED': {
      return {
        ...state,
        comicSelected: action.payload,
      };
    }
    case 'ADD_COMIC': {
      const isRepeted = (id: string) => {
        return state.comicsSelecteds.find(el => el.id === id);
      };

      if (!isRepeted(action.payload.id)) {
        return {
          ...state,
          comicsSelecteds: [...state.comicsSelecteds, action.payload],
        };
      }
      return { ...state };
    }
    case 'REMOVE_COMIC': {
      const filter = state.comicsSelecteds.filter(
        el => el.id !== action.payload,
      );

      return {
        ...state,
        comicsSelecteds: filter,
      };
    }
    case 'CLEAR_STATE': {
      return {
        ...state,
        comicsSelecteds: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default comic;
