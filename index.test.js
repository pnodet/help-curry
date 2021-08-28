import test from 'ava';
import curry from './index.js';

test('curry()', (t) => {
	t.not(curry('hello'), false);
});
