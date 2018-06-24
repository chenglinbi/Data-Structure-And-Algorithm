public class BubbleSort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] intArray = {20, 35, -15, 7, 55, 1, -22};
		int count = 0;
		for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
			for (int i = 0; i < lastUnsortedIndex; i++) {
				count++;
				if (intArray[i] > intArray[i + 1]) {
					swap(intArray, i, i + 1);
				}
			}
		}
		
		for (int i = 0; i < intArray.length; i++) {
			System.out.println(intArray[i]);
		}
		System.out.print("# Of iterations: " + count);
	}
	
	
	public static void swap(int[] array, int i, int j) {
		if (array[i] != array[j] && i != j) { //checks that integer at pos i & j are not the same
			int integerAtPosI = array[i];
			array[i] = array[j];
			array[j] = integerAtPosI;
		} 
		else {
			return;
		}
	}
}
