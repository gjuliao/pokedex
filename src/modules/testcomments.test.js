import { getComments } from './involvementApi.js';
import 'whatwg-fetch';

describe('Testing length of comments', () => {
  let pokeComments = '';
  beforeEach(async () => {
    pokeComments = await getComments('ivysaur');
  });
  test('length of ivysaur comments', () => {
    expect(pokeComments.length).toEqual(10);
  });
});
