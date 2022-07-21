import React, {useEffect} from 'react';
import CartContainer from './CartContainer';
import { useStateValue } from '../context/StateProvider';

const DeliveryArea = () => {
    const [{cartShow}, dispatch] = useStateValue();
    useEffect(() => {}, [cartShow]);

  return (
    <div>
        DeliveryArea
        {cartShow && (
      <CartContainer/>
    )}
    </div>
  )
}

export default DeliveryArea;