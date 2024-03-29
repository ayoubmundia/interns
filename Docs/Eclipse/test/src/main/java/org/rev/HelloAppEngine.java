package org.rev;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.ExecutionException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import com.google.cloud.firestore.FirestoreOptions;

@WebServlet(
    name = "HelloAppEngine",
    urlPatterns = {"/hello"}
)
public class HelloAppEngine extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) 
      throws IOException {
	  
	  FileInputStream serviceAccount = new FileInputStream("D:\\Documents\\Eclipse\\test\\keykey.json");
	
	  FirebaseOptions options = new FirebaseOptions.Builder()
	    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
	    .setDatabaseUrl("https://review-18555.firebaseio.com")
	    .build();
	  
	  FirebaseApp.initializeApp(options);  
	  Firestore db = FirestoreOptions.getDefaultInstance().getService();
	  DocumentReference docRef = db.collection("REVIEWS").document("+212661080484-veriphone.io");
	  ApiFuture<DocumentSnapshot> reviews = docRef.get();
	  DocumentSnapshot documentReviews;
	  try {
	  	documentReviews = reviews.get();
	  	System.out.println(documentReviews.getData());
	  } catch (InterruptedException | ExecutionException e) {
	  	// TODO Auto-generated catch block
	  	e.printStackTrace();
	  }

    response.setContentType("text/plain");
    response.setCharacterEncoding("UTF-8");

    response.getWriter().print("Hello App Engineee!\r\n");

  }
}