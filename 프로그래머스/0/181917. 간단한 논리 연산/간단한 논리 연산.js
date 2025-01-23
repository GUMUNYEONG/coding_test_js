function solution(x1, x2, x3, x4) {
    var answer = false;
    var bool1 = true;
    var bool2 = true;
    
    
    if(!x1 && !x2) bool1 = false;
    if(!x3 && !x4) bool2 = false;
    if(bool1 && bool2) answer = true;
    
    
    return answer;
}