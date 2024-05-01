
/**
 * @param {string} word
 * @param {character} prefixEnd
 * @return {string}
 */
var reversePrefix = function (word, prefixEnd) {
    for (let i = 0; i < word.length; ++i) {
        if (word.charAt(i) === prefixEnd) {
            return reverseCharsInPrefix(word.split(''), i);
        }
    }
    return word;
};

/**
 * @param {string} word
 * @param {number} indexPrefixEnd
 * @return {string}
 */
function reverseCharsInPrefix(word, indexPrefixEnd) {
    let left = 0;
    let right = indexPrefixEnd;
    while (left < right) {
        swap(word, left, right);
        ++left;
        --right;
    }
    return word.join('');
}

/**
 * @param {string} word
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
function swap(word, left, right) {
    let temp = word[left];
    word[left] = word[right];
    word[right] = temp;
}
