function solution(num_list) {
    var answer = 0;
    const c = num_list.reduce((x,y)=>x*y);
    const s = (num_list.reduce((x,y)=>x+y))**2;
    answer = c < s ? 1 : 0
    return answer;
}