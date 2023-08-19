// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCuIcZzFF_PYfmnw1fNsxR9f6L9rSiK0lo",
    authDomain: "authentication-app-85347.firebaseapp.com",
    projectId: "authentication-app-85347",
    storageBucket: "authentication-app-85347.appspot.com",
    messagingSenderId: "452339734544",
    appId: "1:452339734544:web:94c8397f42843714e9d295",
    measurementId: "G-YSSSD6E7ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



// ....................signup starts
let signup = document.getElementById("signup");
let name = document.getElementById("name");
let fname = document.getElementById('fname');

let popup = document.getElementById("alert");
let inputemail = document.getElementById("email");
let inputpassword = document.getElementById("password");

let inputresetpassword = document.getElementById("resetpassword");
// let login=document.getElementById("login");
let signUp=()=> {

    let email = inputemail.value;
    let password = inputpassword.value;
    let inputresetpassword= resetpassword.value
    let fullName = name.value + " " + fname.value;
    // console.log(fullName);
    console.log(inputresetpassword)
    console.log(password)

    if (password == inputresetpassword) {
        
        console.log(inputresetpassword)
        console.log(password)

        createUserWithEmailAndPassword(auth, email, password)


            .then(async(userCredential) => {

                const user = userCredential.user;
                console.log("user", user);

                userCredential.user.displayName = fullName;

                let users={
                    name:name.value,
                    lastName:fname.value,
                    email:inputemail.value,
                    
                }
                
                console.log(users)
                
                const docRef = await addDoc(collection(db, "users"), {
                    ...users,
                    uid:user.uid,
                });
                
                
                console.log("Document written with ID: ", docRef.id);
                
                let storedUID = localStorage.setItem('uid', docRef.id);
             console.log(storedUID)
            //  location.href="./dashboard.html"
                
                
              
                
                if (userCredential == true) {
                    console.log("no error")
                }
                else {


                    popup.innerHTML = ` <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
                <use xlink:href="#check-circle-fill" />
                </svg>
                <div>
                Signed UP!!
                </div>
                </div>`;
                    popup.style.display = "block";

                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 1000)

                    // login.style.display="block";

                    console.log("nhi aya");

                }

            })

            .catch((error) => {

                const errorMessage = error.message;
                console.log("errorr", errorMessage);
                console.log(error.code)

                let errorDisplay = errorMessage.split("(auth/")[1].split(")")[0];

                inputemail.value = "";
                inputpassword.value = "";
                name.value = "";
                fname.value = "";
                inputresetpassword="";


                if (error == true) {
                    console.log("no error")
                }
                else {


                    popup.innerHTML = ` <div class="alert alert-warning d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          ${errorDisplay}
        </div>
        </div>`;
                    popup.style.display = "block";

                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 1000)

                    console.log("nhi aya");


                }

            });
    }
    else{

        popup.innerHTML = ` <div class="alert alert-warning d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          Password is not same!
        </div>
        </div>`
         popup.style.display = "block";

                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 2000)

                    console.log("nhi aya");


        console.log("not same")
                

            
    }
        
 }
 
     signup.addEventListener("click", signUp);
 



//.......................... SIGN UP COMPLETE

// ............................Login Start


let login = document.getElementById('logedIn');
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');


let logingIn = () => {
    let email = loginEmail.value;
    console.log(email);
    let password = loginPassword.value;
    console.log(password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("user", user);
            console.log(userCredential)

            if (userCredential == true) {
                console.log("no error")
            }
            else {


                popup.innerHTML = ` <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
          <use xlink:href="#check-circle-fill" />
        </svg>
        <div>
          You are Loged In!!
        </div>
      </div>`;
                popup.style.display = "block";

                setTimeout(() => {
                    popup.style.display = "none";
                }, 1000)
                location.href="./dashboard.html"
                console.log("nhi aya");

            }

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("errorr", errorMessage);

            let errorDisplay = errorMessage.split("(auth/")[1].split(")")[0];


            if (error == true) {
                console.log("no error")
            }
            else {


                popup.innerHTML = ` <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          ${errorDisplay}
        </div>
      </div>`;
                popup.style.display = "block";

                setTimeout(() => {
                    popup.style.display = "none";
                }, 1000)

                console.log("nhi aya");

            }

        });



}


    login.addEventListener('click', logingIn);


      // .........................login Complete


      let upload=document.getElementById("upload");
      let send=document.getElementById("send");
      let heading=document.getElementById("heading");
      let description=document.getElementById("description");

      let save=async()=>{

        let post={
        heading:heading.value,
        description:description.value,
    }
    console.log(post);
    const docRef = await addDoc(collection(db, "post"), {
        ...post,
        uid:post.uid,
    });
    console.log("Document written with ID: ", docRef.id);




      }
      

    save.addEventListener('click', upload);
      




      export{ collection, addDoc, getFirestore,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }