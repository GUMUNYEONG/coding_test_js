function solution(arr, queries) {
    var answer = [...arr];
    
    queries = queries.flat();
    
    for(let i=0; i<queries.length; i++){
        
        answer[queries[2*i]] = arr[queries[2*i+1]];
        answer[queries[2*i+1]] = arr[queries[2*i]];
        
        arr = [...answer];
        
    }
    
    return answer;
    
}