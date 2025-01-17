function solution(numLog) {
    var answer = '';
    
    const inputMap = {
        "1" : "w",
        "-1" : "s",
        "10" : "d",
        "-10" : "a"
    }
    
    for(let i=0; i<numLog.length-1; i++){
        const input = numLog[i+1] - numLog[i];
        answer += inputMap[input]
    }
    
    
    return answer;
}