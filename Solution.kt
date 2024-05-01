
class Solution {
    fun reversePrefix(word: String, prefixEnd: Char): String {
        for (i in word.indices) {
            if (word[i] == prefixEnd) {
                return reverseCharsInPrefix(word.toCharArray(), i)
            }
        }
        return word
    }

    private fun reverseCharsInPrefix(word: CharArray, indexPrefixEnd: Int): String {
        var left = 0
        var right = indexPrefixEnd
        while (left < right) {
            swap(word, left, right)
            ++left
            --right
        }
        return String(word)
    }

    private fun swap(word: CharArray, left: Int, right: Int) {
        val temp = word[left]
        word[left] = word[right]
        word[right] = temp
    }
}
