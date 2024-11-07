function solution(array) {
    const allNumbers = array.join('');
    return allNumbers.split('7').length - 1;
}