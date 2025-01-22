function solution(arr) {
    var stk = [];
    let i = 0;
    
    while(i < arr.length){
        
        const lastIdx = stk.length-1;
        const stdNum = arr[i];
        
        if(stk.length === 0){
            
            stk.push(stdNum);
            i++;
            
        }else if(stk[lastIdx] < stdNum){
            
            stk.push(stdNum);
            i++;
            
        }else {
            
            stk.pop();
            
        }
    }
    
    return stk;
}