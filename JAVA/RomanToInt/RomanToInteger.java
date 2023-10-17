
// problem statement: 2. Enter a Roman Number as input and convert it to an integer. (Example: IX = 9).

import java.util.Scanner;
import java.util.Map;
import java.util.HashMap;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase(); //I converted input to uppercase

        // checking whether the given roman numerical is valid or not.
        if (isValidRomanNumeral(romanNumeral)) { 
            int result = romanToInt(romanNumeral);
            System.out.println("Integer equivalent: " + result);
        } else {
            System.out.println("Invalid Roman numeral entered.");
        }

        scanner.close();
    }

    public static boolean isValidRomanNumeral(String s) {
        //I used this  Regular expression(REGEX) to validate Roman numerals.
        return s.matches("^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");
    }

    public static int romanToInt(String s) {
        // I have mapped the roman numers to their corresponding vlaues in integers.
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        // I have iterated the given input from end to the begining and performed addition and subtraction according to the requirement.
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = romanMap.get(currentChar);

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }
}