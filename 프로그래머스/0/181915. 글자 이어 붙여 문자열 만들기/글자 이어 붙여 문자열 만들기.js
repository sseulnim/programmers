const solution = (my_string, index_list) => {
    const result = index_list.reduce((acc, cur) => {
        return acc + my_string[cur];
    }, '');
    return result;
}