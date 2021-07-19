// #2
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// #3
function maxOfThree(num0, num1, num2) {
    if (max(num1, num2) > num0) {
        return max(num1, num2);
    } else {
        return num0;
    }
}

// #4
function isVowel(arg) {
    var vowels = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1
    };

    return vowels[arg] === 1
}

// #5
function sum(arr) {
    return arr.reduce(function(total, curr) {
        return total + curr;
    }, 0);
}

function multiply(arr) {
    return arr.reduce(function(prod, curr) {
        return prod * curr;
    }, 1);
}

// #6
function reverse(str) {
    var revStrArr = [];
    for (var i = 0; str.length; i++) {
        revStrArr.push(str[str.length - i - 1])
    }
    return revStrArr.join('');
}

// #7
function findLongestWord(wordArr) {
    return wordArr.reduce(function(acc, curr) {
        if (curr.length > acc.length) return curr;
        return acc;
    }, 0).length;
}

// #8
function filterLongestWords(wordArr, i) {
    return wordArr.filter(function(word) {
        return word.length > i;
    });
}