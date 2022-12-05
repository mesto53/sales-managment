import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUseDocFromAuth } from "../../utils/firebase/firebase.utils";
import InputForm from "../input-form/input-form.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";



const SIGNUp = ()=>{

    const defualtformfield = {
        displayName:'',
        email :'',
        password:'',
        confirmPassword:''
    };


    const [formfield,setformfield] = useState(defualtformfield);
    const {displayName,email,password,confirmPassword } = formfield;
  

    const resetform =()=>{
      setformfield(defualtformfield);
    }


    const onhandle = (event)=>{
          const {name,value} = event.target;
          setformfield({...formfield, [name]:value})
    }


    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
          alert('passwords doesnot match');
          return;
        }
        try{
          const { user } = await createAuthUserWithEmailAndPassword(email,password);
          await createUseDocFromAuth(user,{displayName});
          resetform();
        }catch(error){
          if(error.code ==="auth/email-already-in-use"){
            alert('email already in use');
          }else {
           console.log('user creation occuerd an error',error);}}}


           


    return(
        <div className="sign-up-container">
          <h2>Dont Have An Acount </h2>
          <span>SIGN IN WITH EMAIL AND PASSWORD</span>
          <form onSubmit={handleSubmit}>
            <InputForm 
             type='text'
             label ='Display Name' 
             required 
             onChange={onhandle}
             name='displayName'
             value ={displayName}/>
            

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
            
            <InputForm
             label = 'ConfirmPaswword'
             type='password' 
             required 
             onChange={onhandle} 
             name = 'confirmPassword' 
             value={confirmPassword}/>
            
            <Button  type="submit">signup</Button>
          </form>
        </div>
    )}



export default SIGNUp;