export const TRACTOR_REQUEST_ACCEPTED = "TRACTOR_REQUEST_ACCEPTED";
export const TRACTOR_REQUEST_SCHEDULED = "TRACTOR_REQUEST_SCHEDULED";

export const tractorRequestAccepted = () => {
  return { type: TRACTOR_REQUEST_ACCEPTED };
};

export const tractorRequestScheduled = () => {
  return { type: TRACTOR_REQUEST_SCHEDULED };
};
