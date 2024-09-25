const solution = money => {
    const iceCoffee=Math.floor(money/5500);
    const change=Math.floor(money%5500);
    return [iceCoffee, change]
}