
// Problem statement: 3. Check if the input is pangram or not. (A pangram is a sentence that contains all the
// alphabets from A to Z)

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();

        if (isPangram(input)) { // (If the condition passed means the scentence is having all the 26 letters from
                                // a to z.)
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    // Method to check whether the given scentence is a pngram or not.

    public static boolean isPangram(String input) {
        // I have Created a set to store the letters in the input. (used SET because it
        // takes the count of a letter only once no matter how many times it is
        // repeated).
        Set<Character> letterSet = new HashSet<>();

        // And convert the input to lowercase to make the check case-insensitive.
        input = input.toLowerCase();

        // I Iterated through the input and added letters to the set.
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }

        // Checked if the set contains all 26 letters (A to Z). if yes it retuns true,
        // else false.
        return letterSet.size() == 26;
    }
}
