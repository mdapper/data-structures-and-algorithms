import { set, get } from './';

describe('DynamicArray', () => {
  it('get and set', () => {
    const array = [];

    const newArray = set({ array, index: 0, value: 'a' });
    const value = get({ array: newArray, index: 0 });

    expect(newArray.length).toBe(1);
    expect(value).toBe('a');
  });
});
