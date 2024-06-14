function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq === "=" && eval(`${n}${ineq}${eq}${m}`)) answer = 1;
    if(eq === "!" && eval(`${n}${ineq}${m}`)) answer = 1
    return answer;
}