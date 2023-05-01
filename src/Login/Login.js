/*import React, {Component} from 'react';
import fire from '../Firebase/firebase'

export default class Login extends Component{
    usuario= React.createRef();
    contraseña =React.createRef();

    constructor(props) {
        super(props);
        //Este enlace es necesario para hacer que this funcione en el callback
        this.login =this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    login(e) {
        e.preventDefault();
        var miusuario = this.usuario.current.value;
        var micontraseña = this.contraseña.current.value;

        fire
        .auth()
        .signInWithEmailAndPassword(miusuario, micontraseña)
        .then(u => {})
        .catch(function(error) {
            console.log(error);
        });
    }
    signup(e) {
        e.preventDefault();
        var miusuario = this.usuario.current.value;
        var micontraseña = this.contraseña.current.value;

        fire
        .auth()
        .signInWithEmailAndPassword(miusuario, micontraseña)
        .then(u => {})
        .catch(function(error) {
            console.log(error);
        });
    }
    



    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="exampleInputEmail">Correo electrónico:</label>
                        <input
                        type="email"
                        name="email"
                        id="exampleInputEmail"
                        ref={this.usuario}></input>
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword">Contraseña:</label>
                        <input
                        type="password"
                        name="password"
                        id="exampleInputPassword"
                        ref={this.contraseña}></input>
                    </div>
                </form>
            </div>
        )};
        }

        
    



/*import React from 'react';
import 'firebaseui/dist/firebaseui.css'; //para utilizar las interfaces gráficas prediseñadas de Firebase UI
import Firebase from '../Firebase/firebase'; //importo el archivo firebase.js

//Defino la clase Ligin

class Login extends React.Component{
//variables de estado del componente Login
    state = {
        autenticado: false, //por defecto la inicializo como false
        usuario : "",
        firebase : null
    }
    componentDidMount(){ //se ejecuta solo una vez cuando está ya dibujada la interfaz gráfica del componente
        const firebase = new Firebase(); //creo el objeto firebase
//para saber si el usuario está logeado o no
        firebase.auth.onAuthStateChanged(authUser => {
//si el usuario está logeado, no aparece el formulario de login
            authUser 
            ? this.setState({
                autenticado :true,
                usuario: firebase.auth.currenUser.email,
                firebase :firebase
            })
 //si el usuario no está logeado, aparece el formulario de login         
            :firebase.firebaseui.start("#firebaseui-auth-container",{
                signInSucessUrl: "/",
                credentialHelper:"none",
                callbacks:{ //POST login correcto con dos parámetros, varia el estado del componente y ya no aparece el formulario de login
                    signInSucessWithAuthResult : (authResult, redirectUrl) =>{

                        this.setState({
                            autenticado: true,
                            usuario:firebase.auth.currentUser.email,
                            firebase : firebase

                        })
                        return false; 
                    
                    }
                },
                signInOptions:[
                    {
                        provider : firebase.autorization.EmailAuthProvider.PROVIDER_ID
                    }
                ]

            })
        })
    }
//Dibuja el formulario del login si el usuario no está logeado y si no muestra el nombre del usuario que está en sesión
//En un div meto el botón de salir para el usuario logeado y en otro div el formulario de login
render(){
    return this.state.autenticado 
    ? (
        <React.Fragment>
            <div>Usuario Logeado {this.state.usuario}</div>
            <a href="#" onClick={() => { this.state.firebase.auth.signOut().then(success => {
                                                this.setState({
                                                    autenticado:false
                                                })
                                            }) 
                                        }
                                }>Salir</a>
        </React.Fragment>
    )
    :<div id= "#firebaseui-auth-container"></div>

}
}
export default Login;*/

