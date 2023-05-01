/*import firebase from './firebase';

//información de la aplicación que nos ha facilitado Firebase
const config = {
    apiKey: "AIzaSyA-OlyTspa7WkrydkPJBuqYQobZAuPTOcI",
    authDomain: "profesional-1d8f3.firebaseapp.com",
    projectId: "profesional-1d8f3",
    storageBucket: "profesional-1d8f3.appspot.com",
    messagingSenderId: "581377181507",
    appId: "1:581377181507:web:1320c7bb76d332234611f6",
    measurementId: "G-NE2ZXQS14L"
  };
  const fire = firebase.initializeApp(config);

  export default fire;


/*Importo las librerías de Firebase (aplicación, autorización, interfaces )
import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import { initializeApp } from "firebase/app";
//Vinculo el Firebase con React (claves de acceso al proyecto en la nube en la aplicación Firebase en SDK Config)

const firebaseConfig = {
    apiKey: "AIzaSyA-OlyTspa7WkrydkPJBuqYQobZAuPTOcI",
    authDomain: "profesional-1d8f3.firebaseapp.com",
    projectId: "profesional-1d8f3",
    storageBucket: "profesional-1d8f3.appspot.com",
    messagingSenderId: "581377181507",
    appId: "1:581377181507:web:1320c7bb76d332234611f6",
    measurementId: "G-NE2ZXQS14L"
  };
  const app = initializeApp(firebaseConfig);
  
//Creo una clase Firebase para crear un objeto para poder usar sus funciones y métodos

class Firebase {
    constructor(){//inicializa la propiedad de la clase Firebase
        app.initializeApp(firebaseConfig); //Arranca la conexión de React con la clase Firebase
        this.auth = app.auth();//método auth de la app
        this.autorization = app.auth;//mét0do para capturar el objeto auth desde Firebase
        this.firebaseui= new firebaseui.auth.AuthUI(app.auth()); //objeto que maneja las interfaces de Firebase y le paso el parámetro app.auth

    }
}

export default Firebase; //para que enlace con el componente Login*/

/*
//Importo las librerías de Firebase (aplicación, autorización, interfaces )

import 'firebase/auth';
import * as firebaseui from 'firebaseui';
import { initializeApp } from 'firebase/app';
//Vinculo el Firebase con React (claves de acceso al proyecto en la nube en la aplicación Firebase en SDK Config)

const firebaseConfig = {
    apiKey: "AIzaSyA-OlyTspa7WkrydkPJBuqYQobZAuPTOcI",
    authDomain: "profesional-1d8f3.firebaseapp.com",
    projectId: "profesional-1d8f3",
    storageBucket: "profesional-1d8f3.appspot.com",
    messagingSenderId: "581377181507",
    appId: "1:581377181507:web:1320c7bb76d332234611f6",
    measurementId: "G-NE2ZXQS14L"
  };
  const app = initializeApp(firebaseConfig);
//Creo una clase Firebase para crear un objeto para poder usar sus funciones y métodos

class Firebase {
    constructor(){//inicializa la propiedad de la clase Firebase
        app.initializeApp(firebaseConfig); //Arranca la conexión de React con la clase Firebase
        this.auth = app.auth();//método auth de la app
        this.autorization = app.auth;//mét0do para capturar el objeto auth desde Firebase
        this.firebaseui= new firebaseui.auth.AuthUI(app.auth()); //objeto que maneja las interfaces de Firebase y le paso el parámetro app.auth

    }
}

export default Firebase; //para que enlace con el componente Login*/