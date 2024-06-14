function solution(n) {
    var answer = 0;
    let odd = []; // 홀
    let even = []; // 짝
    
    const arr = Array(n).fill(0);
    
    for(let i=0; i<n; i++){
        arr[i] = i+1;
    }
    
    function sum (sumArr){
        return sumArr.reduce((accumulator,currentvalue) => accumulator + currentvalue);
    };

    
    odd = [...arr].filter(v=> v%2);
    even = [...arr].filter(v=> !(v%2)).map(v=> v**2);
    
    answer = !(n%2) ? sum(even) : sum(odd);
    
    return answer;
}