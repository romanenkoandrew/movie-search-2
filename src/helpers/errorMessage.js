import { ERROR_CODES } from 'constants/errorCodes';

export const errorMessage = (obj) => {
  if (obj.payload.response.message) {
    return obj.payload.response.message;
  } else if (ERROR_CODES[obj.payload.status]) {
    return ERROR_CODES[obj.payload.status];
  } else {
    return 'Something went wrong. Please, try again';
  }
};
