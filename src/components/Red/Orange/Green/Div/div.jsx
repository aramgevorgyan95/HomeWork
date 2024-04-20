import { useContext } from 'react';
import './style.css'
import NameCreateContext from '../../../../../NameContext';




function Div() {

  
  const t  = useContext(NameCreateContext)



  return <div className="div">
    {t.name.name}
    <button onClick={t.translateRU}>Set Name</button>
    <button onClick={t.translateEN}>Set Name</button>

  </div>
}

export default Div;