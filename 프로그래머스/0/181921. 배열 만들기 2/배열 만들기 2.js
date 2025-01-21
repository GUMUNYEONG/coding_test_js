function solution(l, r) {
    var answer = [];
    
    for(let i=l; i<=r; i++){
        let iStr = i + "";
        iStr = iStr.replaceAll("5","");
        iStr = iStr.replaceAll("0","");
        
        if(iStr.length === 0) answer.push(parseInt(i));
    }
    return answer.length === 0 ? [-1] : answer;
}