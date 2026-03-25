const DEV_TOKEN = "420|vOvDUhVeBvS9evKF0kkke2dD20ahRMd10vLb4lNm9619ecb1";
const currentToken = localStorage.getItem("token");

if (import.meta.env.DEV && (!currentToken || currentToken === "null" || currentToken === "undefined")) {
  console.log("Setting temporary dev token in dev-initializer.ts...");
  localStorage.setItem("token", DEV_TOKEN);
}
