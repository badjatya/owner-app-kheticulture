// Importing Tractor Dummy Data
import tractorRequestData from "../../../data/tractorRequest";

// Importing Actions

const initialState = {
  tractorRequest: tractorRequestData,
};

const tractorReducer = (state = initialState, action) => {
  switch (action.type) {
  }
  return state;
};

export default tractorReducer;
