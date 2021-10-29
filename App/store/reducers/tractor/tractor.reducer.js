// Importing Actions

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
  }
  return state;
};

export default tractorReducer;
