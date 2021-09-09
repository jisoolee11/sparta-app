//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCQtyFIZRWbbM2amBKkJbYpqKtCZqOTSes",
    authDomain: "sparta-myhoneytip-jisoo.firebaseapp.com",
    projectId: "sparta-myhoneytip-jisoo",
    storageBucket: "sparta-myhoneytip-jisoo.appspot.com",
    messagingSenderId: "157963964271",
    appId: "1:157963964271:web:10f94f9249dc93d744a29a",
    measurementId: "G-BWNDG9819N"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()