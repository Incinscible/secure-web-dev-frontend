import { writable } from 'svelte/store';

export const jwt = writable("");
export const role = writable("user");
export const myURL = writable("https://secure-web-dev-backend-dsxh.onrender.com");
