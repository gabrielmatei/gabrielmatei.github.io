import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDdPuMA_pwjZ-XO2kMTED2Wd2rlL1i291Y',
  authDomain: 'vue-demo-33248.firebaseapp.com',
  databaseURL: 'https://vue-demo-33248.firebaseio.com',
  projectId: 'vue-demo-33248',
  storageBucket: 'vue-demo-33248.firebasestorage.app',
  messagingSenderId: '221525780674',
  appId: '1:221525780674:web:4c005ffa7fa9f60983335b',
  measurementId: 'G-JJW6VN6E5H',
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)
