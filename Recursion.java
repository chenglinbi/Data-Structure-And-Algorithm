
public class Recursion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("num = 0 " + recursiveFactorial(0));
		System.out.println("num = 1 " + recursiveFactorial(1));
		System.out.println("num = 2 " + recursiveFactorial(2));
		System.out.println("num = 3 " + recursiveFactorial(3));
		System.out.println("num = 4 " + recursiveFactorial(4));
	}
	
	public static int iterativeFactorial(int num) {
		int fac = 1;
		if (num == 0) {
			return 1;
		} else {
			for (int i = 1; i <= num; i++) {
				fac *= i;
			}
			return fac;
		}
	}
	
	public static int recursiveFactorial(int num) {
		if (num == 0) {
			return 1;
		}
		return num * recursiveFactorial(num - 1);
	}

}
