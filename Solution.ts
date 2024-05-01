
function reversePrefix(word: string, prefixEnd: string): string {
    for (let i = 0; i < word.length; ++i) {
        if (word.charAt(i) === prefixEnd) {
            return reverseCharsInPrefix(word.split(''), i);
        }
    }
    return word;
};


function reverseCharsInPrefix(word: string[], indexPrefixEnd: number): string {
    let left = 0;
    let right = indexPrefixEnd;
    while (left < right) {
        swap(word, left, right);
        ++left;
        --right;
    }
    return word.join('');
}


function swap(word: string[], left: number, right: number): void {
    let temp = word[left];
    word[left] = word[right];
    word[right] = temp;
}
