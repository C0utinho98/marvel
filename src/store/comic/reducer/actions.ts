import { Comics } from './types';

interface response {
  type: string;
  payload: Comics;
}

interface responseRemove {
  type: string;
  payload: string;
}

export function selectComic(data: Comics): response {
  return {
    type: 'COMIC_SELECTED',
    payload: data,
  };
}

export function addComic(data: Comics): response {
  return {
    type: 'ADD_COMIC',
    payload: data,
  };
}

export function removeComic(id: string): responseRemove {
  return {
    type: 'REMOVE_COMIC',
    payload: id,
  };
}
