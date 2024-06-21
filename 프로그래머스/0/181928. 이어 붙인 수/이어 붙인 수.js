function solution(num_list) {
    var answer = 0;
    const even = num_list.filter((x,y)=> x%2 === 0).reduce((p,q)=>""+p+q);
    const odd = num_list.filter((x,y)=> x%2 === 1).reduce((p,q)=>""+p+q);
    answer = Number(even) + Number(odd)
    return answer;
}