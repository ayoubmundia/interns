// listen for all auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //setupUI(user);
        print("user logged in");
    } else {
        //setupUI();
        print("user logged out");
    }
});

// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');
// const accountDetails = document.querySelector('.account-details');
// const setupUI = (user) => {
//     if (user){
//         db.collection('users').doc(user.uid).get().then(doc => {
//             const userDetails =`<div> Logged in as ${user.email} </div>
//             `;
//             accountDetails.innerHTML = userDetails;
//         })

//         //UI elements
//         loggedInLinks.forEach(item => item.style.display = 'block');
//         loggedOutLinks.forEach(item => item.style.display = 'none');
//     } else {
//         accountDetails.innerHTML = '';
//         //UI elements
//         loggedInLinks.forEach(item => item.style.display = 'none');
//         loggedOutLinks.forEach(item => item.style.display = 'block');
//     }
// }

/* ---------------------Start SignUp---------------------*/
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const website = signupForm['signup-website'].value;
    const company = signupForm['signup-company'].value;
    const fullName = signupForm['signup-fullName'].value;
    const email = signupForm['signup-email'].value;
    const phone = signupForm['signup-phone'].value;
    const country = signupForm['signup-country'].value;
    const password = signupForm['signup-password'].value;

    // SignUp the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('COMPANY').doc(website).set({
            website: website,
            company: company,
            name: fullName,
            phone: phone,
            country: country
        })
    }).then(() => {
        const modal = document.querySelector("#modal-signup");
        //MSAssertion.modal.getInstance(modal).close();
        signupForm.reset();
        window.location.href = "home.html";
    });
});
/* ---------------------End SignUp---------------------*/

/* ---------------------Start Google SignUp---------------------*/
function GoogleSignUp() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location = "home.html";
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
/* ---------------------End Google SignUp---------------------*/

/* ---------------------Start Facebook SignUp---------------------*/
function FbSignUp() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
};
/* ---------------------End Facebook SignUp---------------------*/
/* ---------------------Start GitHub SignUp---------------------*/
function GitHubSignUp() {
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
};
/* ---------------------End GitHub SignUp---------------------*/
/* ---------------------Start Logout---------------------*/
// const logout = document.querySelector("#logout");
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut();
// });
/* ---------------------End logout---------------------*/

/* ---------------------Start Login---------------------*/
// const loginForm = document.querySelector("#login-form");
// loginForm.addEventListener('submit' , (e) =>{
//     e.preventDefault();
//     const email = loginForm['login-email'].value;
//     const password = loginForm['login-password'].value;
//     auth.signInWithEmailAndPassword(email, password).then(cred => {
//         console.log(cred.user);
//         loginForm.reset();
//     });
// });
/* ---------------------End Login---------------------*/