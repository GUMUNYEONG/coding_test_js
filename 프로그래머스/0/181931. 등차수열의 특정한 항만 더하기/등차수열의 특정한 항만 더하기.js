function solution(a, d, included) {
    var answer = 0;
    let arr = Array.from({length : included.length},(_,i)=> a + i*d);
    
    answer = arr.filter((v,k)=>included[k]).reduce((v,i)=>v+i);
    
    // answer = arr.reduce((v,i)=>v+i,0);


    return answer;
}