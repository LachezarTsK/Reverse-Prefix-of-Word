
using System;

public class Solution
{
    public string ReversePrefix(string word, char prefixEnd)
    {
        for (int i = 0; i < word.Length; ++i)
        {
            if (word[i] == prefixEnd)
            {
                return ReverseCharsInPrefix(word.ToCharArray(), i);
            }
        }
        return word;
    }

    private String ReverseCharsInPrefix(char[] word, int indexPrefixEnd)
    {
        int left = 0;
        int right = indexPrefixEnd;
        while (left < right)
        {
            Swap(word, left, right);
            ++left;
            --right;
        }
        return string.Join("", word);
    }

    private void Swap(char[] word, int left, int right)
    {
        char temp = word[left];
        word[left] = word[right];
        word[right] = temp;
    }
}
