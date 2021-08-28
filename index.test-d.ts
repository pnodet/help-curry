/* eslint-disable @typescript-eslint/no-empty-function */
import {expectType} from 'tsd';
import curry from './index.js';

expectType<() => void>(curry(() => {}));
