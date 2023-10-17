
// problem statement: 1.Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Arrays;
import java.util.Collections;

public class shuffle {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 4, 5, 6, 7};  
        Collections.shuffle(Arrays.asList(arr));  //shuffled the given array by converting it into a list collection
        System.out.println(Arrays.toString(arr));  
    }
}
