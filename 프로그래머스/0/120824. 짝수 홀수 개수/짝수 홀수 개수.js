function solution(num_list){
    var answer = [];
    var oddNum = 0;
    var evenNum = 0;

for (var i = 0; i < num_list.length; i++){
    var answer = (num_list[i] % 2 == 0) ? evenNum++: oddNum++;}
    return [evenNum,oddNum];
} 