import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAxfDvar7NH7QMwg1acVC1R6tMO9OQ8vGQ',
  authDomain: 'food-up-2570f.firebaseapp.com',
  projectId: 'food-up-2570f',
  storageBucket: 'food-up-2570f.appspot.com',
  messagingSenderId: '228682448893',
  appId: '1:228682448893:web:c560a7b149603b39472394',
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
