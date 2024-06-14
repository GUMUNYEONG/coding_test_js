function solution(code) {
    var answer = [...code.replaceAll("1", "")].filter((val, idx) => idx % 2 === 0).join("");
    return answer.length > 0 ? answer : "EMPTY";
}