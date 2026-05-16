class passwordManager {
    constructor() {
      console.log('passwordManager class constructor called');
    }
    getHashPassword(original_password){
        let secert ="abc";
        return secert;
    }
    comparePassword(original_password,Hashed_Password){
        return true;
    }

}
module.exports.passwordManager = passwordManager;