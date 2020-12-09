import { getEndpoint } from './requests';
import { errorMessage } from './errorMessage';
import { BASIC_URL } from 'constants/url';
import {
  getFromLS,
  updateLS,
  findItemLS,
  toggleItemInLS,
} from './localStorage';

describe('getEndpoint', () => {
  it('should return correct url', () => {
    expect(getEndpoint('/testUrl')).toEqual(`${BASIC_URL}/testUrl`);
  });
  it('should return correct url if uncorrect data', () => {
    expect(getEndpoint(null)).toEqual('');
  });
  it('should return correct url if uncorrect data', () => {
    expect(getEndpoint(false)).toEqual('');
  });
});

describe('errorMessage', () => {
  const testObj = {
    payload: {
      response: {
        message: 'test',
      },
    },
  };
  const testObj2 = {
    payload: {
      status: 400,
    },
  };
  const testObj3 = {
    payload: {
      nothing: 'nothing',
    },
  };
  it('should return correct errorMessage if contain message', () => {
    expect(errorMessage(testObj)).toEqual('test');
  });
  it('should return correct errorMessage if contain status', () => {
    expect(errorMessage(testObj2)).toEqual('Authentication failed');
  });
  it('should return correct errorMessage if not contain message and status', () => {
    expect(errorMessage(testObj3)).toEqual(
      'Something went wrong. Please, try again'
    );
  });
});

describe('localStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should save to localStorage', () => {
    const KEY = 'foo',
      VALUE = 'bar';
    updateLS(KEY, VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
  it('localStorage setItem should called', () => {
    updateLS('a', '1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  it('localStorage getItem should called', () => {
    getFromLS('a');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  it('findItemLS can not find in localStorage item and should return undefined', () => {
    expect(findItemLS('a', { b: 1 })).toBe(undefined);
  });
  it('findItemLS should called getItem', () => {
    findItemLS('a', { b: 1 });
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  it('toggleItemInLS should called getItem', () => {
    toggleItemInLS('a', { b: 1 });
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  it('toggleItemInLS should called setItem', () => {
    toggleItemInLS('a', { b: 1 });
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
