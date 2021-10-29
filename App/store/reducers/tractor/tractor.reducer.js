// Importing Actions
import { TRACTOR_REQUEST_ACCEPTED } from "../../actions/tractor.action";

const initialState = {
  tractorRequest: {
    id: 1,
    tractorName: "Utility Tractor",
    status: "New",
    image:
      "https://images.pexels.com/photos/3793/agriculture-tractor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bookingDate: "24 Nov, 2021",
    farmerName: "Raj Jain",
    location: "Indore",
    contact: "1231231234",
  },
};

const tractorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACTOR_REQUEST_ACCEPTED:
      return {
        ...state,
        tractorRequest: { ...state.tractorRequest, status: "Accepted" },
      };
  }
  return state;
};

export default tractorReducer;
