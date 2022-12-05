import SIGNUp from "../../components/sign-up-form/sign-up-form.component";
import SIGNIn from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication=() =>{

return(
        <div className="authentication-container"> 
            <SIGNIn/>
            <SIGNUp/>
        </div>
    );
}
export default Authentication;