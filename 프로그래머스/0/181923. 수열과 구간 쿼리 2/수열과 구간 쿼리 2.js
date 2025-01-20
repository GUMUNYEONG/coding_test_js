function solution(arr, queries) {
    var answer = [];
    
    queries = queries.flat();
    
    for(let i=0; i<queries.length/3; i++){
        const s = queries[3*i];
        const e = queries[3*i+1];
        const k = queries[3*i+2];
        
        const newArr = arr.slice(s,e+1).sort((a,b) => a-b);
        
        const bigArr = newArr.filter((num)=> k < num);
        
        answer.push(bigArr[0] ? bigArr[0] : -1);
    }
    
    return answer;
}