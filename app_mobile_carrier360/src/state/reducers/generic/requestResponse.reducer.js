const initialState = {
  isWaiting: false,
  value: null,
  error: null,
  result: null,
};

export default actionTypeSet => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypeSet.Start: return {
      isWaiting: true,
      value: payload,
      error: null,
      result: null,
    };
    case actionTypeSet.Fail: return {
      ...state,
      isWaiting: false,
      error: payload,
      // leave value unmodified
    };
    case actionTypeSet.Succeed: return {
      ...state,
      isWaiting: false,
      error: null,
      result: payload,
      // leave value unmodified
    };
    default: return state;
  }
};
