import { BASIC_URL } from 'constants/url';

export const getEndpoint = (path) => (path ? `${BASIC_URL}${path}` : '');
