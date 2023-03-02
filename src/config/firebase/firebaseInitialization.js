import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
  apiKey: "AIzaSyCadzsvpHsC_EoNTsnNh9oC8fkyanknI4M",
  authDomain: "library-management-5ffb1.firebaseapp.com",
  projectId: "library-management-5ffb1",
  storageBucket: "library-management-5ffb1.appspot.com",
  messagingSenderId: "11616848827",
  appId: "1:11616848827:web:90cc24342d05108fc8929e",
  measurementId: "G-9JRG5GDQB4"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;