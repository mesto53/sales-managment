import { useState } from "react";
import InputForm from "../input-form/input-form.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";
import { 
  signInWithGooglePopup ,
  SignUserInWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";



const SIGNIn = ()=>{


  const SignInWithGoogle = async()=>{
    await signInWithGooglePopup();};  


  const defualtformfield = {
      email :'',
      password:'',};


  const [formfield,setformfield] = useState(defualtformfield);
  const {email,password } = formfield;

  const resetform =()=>{
    setformfield(defualtformfield)};



  const onhandle = (event)=>{
    const {name,value} = event.target;
    setformfield({...formfield, [name]:value})};


    
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{
      await SignUserInWithEmailAndPassword(email,password);
      resetform();
    }catch(error){
      switch(error.code){
        case 'auth/user-not-found':
          alert('Email Not Found');
          break;
        case 'auth/wrong-password':
          alert('incorect Password for email');
          break;
        default:
          console.log(error);
  }}};
  


    return(
        <div className="sign-in-container">
          <h2>Already Have An Acount </h2>
          <span>SIGN IN WITH EMAIL AND PASSWORD</span>
          <form onSubmit={handleSubmit}>
            <InputForm 
             label='Email'
             type= 'email' 
             required 
             onChange={onhandle} 
             name ='email' 
             value={email}/>
            
            <InputForm
             label = 'Password' 
             type='password' 
             required 
             onChange={onhandle} 
             name = 'password' 
             value={password}/>
            
            <div className="buttons-container">
              <Button  type="submit">signIn</Button>
              <Button type='button' buttonType='google' onClick={SignInWithGoogle}>google sign in</Button>
            </div>
            
          </form>
        </div>
    )}



export default SIGNIn;