
import java.util.Arrays;
import java.util.Scanner;


public class AnagramChecker {
   public static void main(String[] args) {
    Scanner s=new Scanner(System.in);
    System.out.println("Enter first string");
    String a=s.next();
    System.out.println("Enter second string");
    String b=s.next();
    a=a.toLowerCase();
    b=b.toLowerCase();
    if(a.length()!=b.length()){
        System.out.println("false");
    }
    char[] a1=a.toCharArray();
    char[] b1=b.toCharArray();
    Arrays.sort(a1);
    Arrays.sort(b1);
    if(Arrays.equals(a1, b1)){
        System.out.println("true");
    }
    else{
        System.out.println("false");
    }
   }
} 