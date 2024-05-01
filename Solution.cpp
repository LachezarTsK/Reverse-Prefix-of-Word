
#include <string>
using namespace std;

class Solution {

public:
    string reversePrefix(string& word, char prefixEnd) const {
        for (int i = 0; i < word.length(); ++i) {
            if (word[i] == prefixEnd) {
                return reverseCharsInPrefix(word, i);
            }
        }
        return word;
    }

private:
    string reverseCharsInPrefix(string& word, int indexPrefixEnd) const {
        int left = 0;
        int right = indexPrefixEnd;
        while (left < right) {
            swap(word[left], word[right]);
            ++left;
            --right;
        }
        return word;
    }
};
