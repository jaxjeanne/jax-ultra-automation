import * as Chance from 'chance';
import { PREFIX } from './utils';

export const chance = new Chance();

export const ALPHANUMERIC_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export const ALPHA_POOL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Generates a random string which includes the test data prefix
 * @param length Number of random characters in addition to the prefix
 * @param pool A string containing the set of characters to select from. Defaults to alpha characters only.
 *             random_util provides ALPHA_POOL, ALPHANUMERIC_POOL and ASCII_POOL for convenience.
 */
export function randomString(length = 12, pool = ALPHANUMERIC_POOL) {
    return PREFIX + chance.string({ length, pool });
}

/**
 * Generates a random email with example.com domain. example.com, example.net, and example.org are
 * second-level domain names reserved by the Internet Engineering Task Force through RFC 2606,
 * Section 3,1 for use in documentation and examples. They are not available for registration.
 */
export function randomEmail() {
    return randomString() + '@example.com';
}
