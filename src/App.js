import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase.auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
    </div>
  );
}

export default App;
