import Green from './Green/green';
import Div from './Green/Div/div'
import './style.css'

function Orange() {

    return <div className="orange">
            <Green>
                <Div  />
            </Green>
            <Green></Green>
    </div>
  }
  
  export default Orange;