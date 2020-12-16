import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase.auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const [user] = useAuthState(auth); 

firebase.initializeApp({
  apiKey: "AIzaSyA-tcG_vmpuwDQ7AWBRtyPQ8zzoCWZMguo",
  authDomain: "spinitchat.firebaseapp.com",
  projectId: "spinitchat",
  storageBucket: "spinitchat.appspot.com",
  messagingSenderId: "917377122174",
  appId: "1:917377122174:web:d1cf858605026272667d2f",
  measurementId: "G-T21T8K43E2"
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
