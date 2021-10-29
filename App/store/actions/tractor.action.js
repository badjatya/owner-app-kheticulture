export const TRACTOR_REQUEST_ACCEPTED = "TRACTOR_REQUEST_ACCEPTED";
export const TRACTOR_REQUEST_SCHEDULED = "TRACTOR_REQUEST_SCHEDULED";
export const TRACTOR_REQUEST_IN_TRANSIT = "TRACTOR_REQUEST_IN_TRANSIT";
export const TRACTOR_REQUEST_REACHED = "TRACTOR_REQUEST_REACHED";
export const TRACTOR_REQUEST_JOB_IN_PROGRESS =
  "TRACTOR_REQUEST_JOB_IN_PROGRESS";
export const TRACTOR_REQUEST_FINISH = "TRACTOR_REQUEST_FINISH";

export const tractorRequestAccepted = () => {
  return { type: TRACTOR_REQUEST_ACCEPTED };
};

export const tractorRequestScheduled = () => {
  return { type: TRACTOR_REQUEST_SCHEDULED };
};

export const tractorRequestInTransit = () => {
  return { type: TRACTOR_REQUEST_IN_TRANSIT };
};

export const tractorRequestReached = () => {
  return { type: TRACTOR_REQUEST_REACHED };
};

export const tractorRequestJobInProgress = () => {
  return { type: TRACTOR_REQUEST_JOB_IN_PROGRESS };
};

export const tractorRequestFinish = () => {
  return { type: TRACTOR_REQUEST_FINISH };
};
