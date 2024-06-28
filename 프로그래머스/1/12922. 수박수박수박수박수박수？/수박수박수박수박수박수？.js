function solution(n) {
    var answer = '';
    const quo = Math.ceil(n/2);
    const rem = n%2;
    const repeatString = "수박".repeat(quo);
    
    answer = rem ? repeatString.slice(0,-1) : repeatString;
    return answer;
}