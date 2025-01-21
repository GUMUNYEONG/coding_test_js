function solution(arr, queries) {
    var answer = [];
    // 이중으로 쓰는게 최선인가... 다른 방법 없나
    
    
    for(let i=0; i<queries.length; i++){
        const [s,e,k] = queries[i];
        
        for(let j=0; j<arr.length; j++){
            if(s<=j && j<=e && j%k === 0){
                arr[j] += 1;
            }
            
            
        }
    }

    return arr;
}