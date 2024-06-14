function solution(code) {
    var answer = '';
    let ret = '';
    let mode = 0;
    let codeArr = [...code];
    
    codeArr.forEach((v,k)=>{
        if(v === "1"){
            mode = !mode;
        }else{
            if(mode && k%2) ret += v;
            if(!mode && !(k%2)) ret += v;
        }
    });
    
    answer = ret === '' ? 'EMPTY' : ret;
    
    
    return answer;
}