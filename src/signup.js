class UserInfo {
  constructor(uid, pwd, uName,uEmail){
    this._uid = uid;
    this._pwd = pwd;
    this._uName = uName;
    this._uEmail = uEmail;
  }
  set uid(uid){
    if(typeof(uid) === 'string'){
      this._uid = uid;
    }else {
        console.error("이것은 올바른 유저아이디가 아닙니다.");
    }
  }
  set pwd(val){
    this._pwd = val;
  }
  set uName(val){
    this._uName = val;
  }
  set uEmail(val){
    this._uEmail = val;
  }
  get uid(){
    return this._uid;
  }
  get pwd(){
    return this._pwd;
  }
  get uName(){
    return this._uName;
  }
  get uEmail(){
    return this._uEmail;
  }

}

let DGC = new UserInfo("dgchoi3904", "qwe123asd", "DGChoi", "dgchoi3904@email.com")
console.log(DGC);
console.log(DGC.uid);
console.log(DGC.pwd);
console.log(DGC.uEmail);
console.log(DGC.uName);