public class SelectionSort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] intArray = {20, 35, -15, 7, 55, 1, -22};
		for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
			int largestIndex = 0;
			for (int i = 0; i <= lastUnsortedIndex; i++) {
				if (intArray[largestIndex] < intArray[i]) {
					largestIndex = i;
				}
			}
			swap(intArray, largestIndex, lastUnsortedIndex);
		}
		
		for (int i = 0; i < intArray.length; i++) {
			System.out.println(intArray[i]);
		}
	}
	
	public static void swap(int[] intArray, int i, int j) {
		if (i != j) {
			int temp = intArray[i];
			intArray[i] = intArray[j];
			intArray[j] = temp;			
		} else {
			return;
		}
	}

}
