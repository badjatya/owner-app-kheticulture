// Importing Actions
import {
  TRACTOR_REQUEST_ACCEPTED,
  TRACTOR_REQUEST_SCHEDULED,
  TRACTOR_REQUEST_IN_TRANSIT,
  TRACTOR_REQUEST_REACHED,
  TRACTOR_REQUEST_JOB_IN_PROGRESS,
} from "../../actions/tractor.action";

const data = {
  id: 1,
  tractorName: "Utility Tractor",
  status: "New",
  image:
    "https://images.pexels.com/photos/3793/agriculture-tractor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bookingDate: "24 Nov, 2021",
  farmerName: "Raj Jain",
  location: "Indore",
  contact: "1231231234",
};

const initialState = {
  tractorRequest: data,
};

const tractorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACTOR_REQUEST_ACCEPTED:
      return {
        ...state,
        tractorRequest: { ...state.tractorRequest, status: "Accepted" },
      };

    case TRACTOR_REQUEST_SCHEDULED:
      return {
        ...state,
        tractorRequest: { ...state.tractorRequest, status: "Scheduled" },
      };

    case TRACTOR_REQUEST_IN_TRANSIT:
      return {
        ...state,
        tractorRequest: { ...state.tractorRequest, status: "In Transit" },
      };

    case TRACTOR_REQUEST_REACHED:
      return {
        ...state,
        tractorRequest: { ...state.tractorRequest, status: "Reached" },
      };

    case TRACTOR_REQUEST_JOB_IN_PROGRESS:
      return {
        ...state,
        tractorRequest: { ...state.tractorRequest, status: "Job In Progress" },
      };
  }
  return state;
};

export default tractorReducer;
