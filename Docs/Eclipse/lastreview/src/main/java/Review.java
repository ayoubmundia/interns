import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;



@WebServlet("/getReviews")
public class Review extends HttpServlet {
	private Firestore db;
	
	@Override
	public void init() {
		try {
			FileInputStream serviceAccount = new FileInputStream("D:\\Docs\\Eclipse\\lastreview\\reviewapp.json");
			FirebaseOptions options = new FirebaseOptions.Builder()
					  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
					  .setDatabaseUrl("https://reviewapp-606b6.firebaseio.com")
					  .build();
			FirebaseApp.initializeApp(options);
			db = FirestoreClient.getFirestore();
			System.out.println("ICI");
		} catch (Exception e) {
			System.out.print("PROBLEM");
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		doPost(request, response);
//	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String Data = request.getParameter("id");
        System.out.println(Data);
	}

}


