function solution(my_string, queries) {
    let answer = '';
    arr = my_string.split('');
    
    
    for(const [s,e] of queries){
        let left = s;
        let right = e;
        
        while(left < right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            
            left++;
            right--;
        }
    }
    
    answer = arr.join('');
    
    return answer;
}