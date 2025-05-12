function solution(my_string, index_list) {
    let answer = '';
    my_string = my_string.split(''); 
    
    for(const i of index_list){
        answer += my_string[i];
    }
    
    return answer;
}