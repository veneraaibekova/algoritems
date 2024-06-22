/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let M =
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let sum = M[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        if (M[s[i]] < M[s[i + 1]]) {
            sum -= M[s[i]];
        }
        else {
            sum += M[s[i]];
        }
    }
    return sum;
};