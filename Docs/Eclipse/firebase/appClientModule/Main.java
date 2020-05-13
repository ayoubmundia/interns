import java.io.FileInputStream;
import java.io.FileNotFoundException;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.v1beta1.FirestoreClient;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class Main {
	public static void main(String[] args) throws Exception {
		System.out.println("Bismilah");
		FileInputStream serviceAccount = new FileInputStream("firebase-adminsdk.json");
		FirebaseOptions option = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();
		FirebaseApp.initializeApp(option);
		
		Firestore db = com.google.firebase.cloud.FirestoreClient.getFirestore();
		// TODO Auto-generated method stub
	}

	/* (non-Java-doc)
	 * @see java.lang.Object#Object()
	 */
	public Main() {
		super();
	}

}