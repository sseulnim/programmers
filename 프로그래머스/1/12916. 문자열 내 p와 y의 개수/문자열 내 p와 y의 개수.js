function solution(s){
    const lowerStr = s.toLowerCase();
    const pCount = lowerStr.split('p').length -1;
    const yCount = lowerStr.split('y').length -1;
    return pCount === yCount;
}