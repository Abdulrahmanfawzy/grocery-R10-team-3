/**
 * Authentication utilities for managing the user's session token
 */

const TOKEN_KEY = 'token';

/**
 * Stores the authentication token in localStorage
 * @param token - The JWT or session token to store
 */
export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Retrieves the authentication token from localStorage
 * @returns The token or null if not found
 */
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Removes the authentication token from localStorage (Logout)
 */
export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * Checks if a token exists in localStorage
 * @returns boolean indicating if the user is potentially authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};
