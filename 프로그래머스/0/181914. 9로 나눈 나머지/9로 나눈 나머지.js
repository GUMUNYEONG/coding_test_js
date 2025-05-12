function solution(number) {    
    do{
        const numList = number.split('');
        number = numList.reduce((acc,val)=> acc + +val, 0);
    }while(number.length < 16);
    
    return number % 9
}