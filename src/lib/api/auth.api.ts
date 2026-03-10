/**
 * Auth API is no longer needed for dynamic token fetching.
 * Using fixed token in local storage as requested.
 */
export const authApi = {
  login: async () => {
    console.warn("Dynamic auth login is disabled. Using fixed token.");
    return { token: "355|DaHfhqKU7rcbUYuq0GJSOiyZVT4c0QHWU7ENaoSP141eb587" };
  }
};
