function read_display_Quote() {

  //Get into the right collection
  db.collection("quotes").doc("Tuesday")                                                  //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(TuesdayDoc => {                                                           //arrow notation
      console.log("current document data: " + TuesdayDoc.data());                         //.data() returns data object
      document.getElementById("quote-goes-here").innerHTML = TuesdayDoc.data().quote;     //using javascript to display the data on the right place

      //Here are other ways to access key:value data fields
      //$('#quote-goes-here').text(c.data().quote);                                       //using jquery object dot notation
      //$("#quote-goes-here").text(c.data()["quote"]);                                    //using json object indexing
    })
}
read_display_Quote()        //calling the function



function insertName() {
  firebase.auth().onAuthStateChanged(user => {
    //Check if user is signed in:
    if (user) {
      //Do something for the current logged-in user here: 
      console.log(user.uid);
      //Go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid);
      //Get the document for current user.
      currentUser.get().then(userDoc => {
          var user_Name = userDoc.data().name;
          console.log(user_Name);
          //method #1:  insert with html only
          document.getElementById("name-goes-here").innerText = user_Name;   //using javascript
          //method #2:  insert using jquery
          // $("#name-goes-here").text(user_Name);                                //using jquery
        })
    } else {
      //No user is signed in.
    }
  });
}
insertName();