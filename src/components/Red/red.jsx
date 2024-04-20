import Brown from './Brown/brown';
import Orange from './Orange/orange';
import './style.css';

function Red() {

  return <div className="red">
          <Brown />
          <Orange />
  </div>
}

export default Red;