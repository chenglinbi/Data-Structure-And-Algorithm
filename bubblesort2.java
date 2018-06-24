public class BubbleSort {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] intArray = {20, 35, -15, 7, 55, 1, -22};
		
		for (int j = 0; j < intArray.length; j++) {
			for (int i = 0; i < intArray.length - 1; i++) {
				if (intArray[i] > intArray[i + 1]) {
					swap(intArray, i, i + 1);
				}
			}			
		}
		for (int i = 0; i < intArray.length; i++) {
			System.out.println(intArray[i]);
		}
	}
	
	public static void swap(int[] array, int i, int j) {
		if (i != j) {
			int temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		} else {
			return;
		}
	}
	
}
