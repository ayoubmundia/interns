package org.rev.com;

import java.io.FileInputStream;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.System;
import java.util.concurrent.ExecutionException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

@WebServlet("/hello")
public class HelloAppEngine extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)  throws IOException {	  
	  	System.out.println("Welcome");
		
	  	FileInputStream serviceAccount = new FileInputStream("D:\\Docs\\Eclipse\\review\\keykey.json");
		
		FirebaseOptions options = new FirebaseOptions.Builder()
		  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
		  .setDatabaseUrl("https://review-18555.firebaseio.com")
		  .build();
		FirebaseApp.initializeApp(options);
		Firestore db = FirestoreClient.getFirestore();
		
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
	
  }
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
	  System.out.println("hello1");
  }
}