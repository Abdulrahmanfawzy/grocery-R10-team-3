/**
 * Auth API is no longer needed for dynamic token fetching.
 * Using fixed token in local storage as requested.
 */
export const authApi = {
  login: async () => {
    console.warn("Dynamic auth login is disabled. Using fixed token.");
    return { token: "420|vOvDUhVeBvS9evKF0kkke2dD20ahRMd10vLb4lNm9619ecb1" };
  },
};
