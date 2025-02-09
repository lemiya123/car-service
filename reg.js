import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7VRzrndmtNbdC3RP6dueWtAaem2IxVLk",
    authDomain: "car-service-f4c75.firebaseapp.com",
    projectId: "car-service-f4c75",
    storageBucket: "car-service-f4c75.firebasestorage.app",
    messagingSenderId: "479662659364",
    appId: "1:479662659364:web:fad32629a8bf3eb9ba05b1",
    measurementId: "G-VHPPGYSGXV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

ddocument.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const serviceType = document.getElementById('service-type').value;
    const appointmentDate = document.getElementById('appointment-date').value;
  
    // Get a reference to the database
    const dbRef = ref(database, 'registrations/' + name);
  
    // Set the data
    set(dbRef, {
      name: name,
      email: email,
      phone: phone,
      serviceType: serviceType,
      appointmentDate: appointmentDate
    })
    .then(() => {
      console.log('Data saved successfully!');
      // Optionally, display a success message to the user
    })
    .catch((error) => {
      console.error('Error saving data:', error);
      // Optionally, display an error message to the user
    });
  });
  