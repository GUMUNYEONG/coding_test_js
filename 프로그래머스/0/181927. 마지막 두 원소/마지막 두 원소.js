function solution(num_list) {
    var answer = [...num_list];
    let last = num_list.pop();
    let second = num_list.pop();
    
    last > second ? answer.push(last-second) : answer.push(2 * last);
    
    return answer;
}