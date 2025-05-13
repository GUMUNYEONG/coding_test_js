function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(const str of intStrs){
        const arr = str.split('');
        const num = parseInt(arr.slice(s,s+l).join(''));
        if(num > k) answer.push(num);
    }
    return answer;
}