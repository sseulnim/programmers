function solution(price, money, count) {
    const totalCost = price * count * (count + 1) / 2;
    const shortage = totalCost - money;
    return Math.max(0, shortage);
}