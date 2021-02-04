interface response {
  type: string;
}

export function toggleModal(): response {
  return {
    type: 'TOGGLE_MODAL',
  };
}
