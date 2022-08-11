export default class UserInfo {
    constructor({ bio, statusInfo }) {
      this._bio = document.querySelector(bio);
      this._statusInfo = document.querySelector(statusInfo);
    }
  
    getUserInfo() {
      const userInfo = {
        bio: this._bio.textContent,
        statusInfo: this._statusInfo.textContent
      }
  
      return userInfo;
    }
  
    setUserInfo({ username, status }) {
      this._bio.textContent = username;
      this._statusInfo.textContent = status;
    }
  }