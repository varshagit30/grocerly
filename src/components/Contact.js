import React, {useEffect} from 'react';
import CartContainer from './CartContainer';
import { useStateValue } from '../context/StateProvider';


const Contact = () => {
  const [{cartShow}, dispatch] = useStateValue();
  useEffect(() => {}, [cartShow]);
  return (
    <div>
      Contact
      {cartShow && (
      <CartContainer/>
    )}
      
    </div>
  )
}

export default Contact;