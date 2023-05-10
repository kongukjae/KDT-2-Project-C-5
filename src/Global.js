export let globalState={
  tags:"",
}


export function setTagString(str){
  globalState.tags=str;
}

export function getTagString(){
  return globalState.tags;
}