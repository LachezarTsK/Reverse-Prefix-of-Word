
public class Solution {

    public String reversePrefix(String word, char prefixEnd) {
        for (int i = 0; i < word.length(); ++i) {
            if (word.charAt(i) == prefixEnd) {
                return reverseCharsInPrefix(word.toCharArray(), i);
            }
        }
        return word;
    }

    private String reverseCharsInPrefix(char[] word, int indexPrefixEnd) {
        int left = 0;
        int right = indexPrefixEnd;
        while (left < right) {
            swap(word, left, right);
            ++left;
            --right;
        }
        return String.valueOf(word);
    }

    private void swap(char[] word, int left, int right) {
        char temp = word[left];
        word[left] = word[right];
        word[right] = temp;
    }
}
