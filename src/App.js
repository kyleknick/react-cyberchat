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

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef. orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const[formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    
    setFormValue('')
  }

  return (
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>

    <form onSubmit={sendMessage}>

      <input value={formValue}onChange={(e) => setFormValue(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';



  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  ) 
}


export default App;
