import React, {useEffect} from 'react';
import CartContainer from './CartContainer';
import { useStateValue } from '../context/StateProvider';
import blr from "./img/blr.svg";
import del from "./img/dl.svg";
import ch from "./img/ch.svg";
import ghz from "./img/ghz.svg";
import hyd from "./img/hyd.svg";
import m from "./img/mumb.svg";
import pune from "./img/pune.svg";
import { motion } from 'framer-motion';

const DeliveryArea = () => {
    const [{cartShow}, dispatch] = useStateValue();
    useEffect(() => {}, [cartShow]);

  return (
    <div className=" w-full min-h-screen">
      <div className=" max-w-[1240px] mx-auto px-2">
        <h2 className=" text-4xl font-extrabold  text-center">Delivery Areas</h2>
        <p className=" text-2xl py-8 text-gray-600 text-center">
          We are currently delivering to these areas.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-8">

          <div className="flex gap-2">
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            whileHover={{scale : 1.1}}>
            <img class="mx-auto w-7 h-7 mr-5 cursor-pointer" src={blr} alt="blr" />
            </motion.div>
            <div>
              <motion.h3 className=" font-bold text-xl cursor-pointer">Bangalore</motion.h3>
              <p className=" text-lg pt-3 pb-4 ">
              Brookefield | Banashankari | Mico Layout | Indiranagar | 
              Jayanagar | Vijay Nagar | Shivaji Nagar | Singasandra | Marathahalli | 
              Kalyan Nagar | Whitefield | JP Nagar | Koramangala | KR Puram | RR Nagar | Ramamurthy Nagar | 
              Basavanapura | Chickpet | Hebbal
              </p>
            </div>
          </div>

          <div className="flex gap-2 ">
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            whileHover={{scale : 1.1}}>
            <img class="mx-auto w-7 h-7 mr-5 cursor-pointer" src={ch} alt="blr" />
            </motion.div>
            <div>
              <h3 className=" font-bold text-xl cursor-pointer">Chennai</h3>
              <p className=" text-lg pt-3 pb-4 ">
              Velachery | Mylapore | Kk Nagar | Tambaram | T Nagar | Madambakkam | Pallikaranai | 
              Nandambakkam | Mogappair | Mudichur | Nanganallur | Perumbakkam | Medavakkam | 
              Perambur | Gerugambakkam | Nungambakkam | Pammal | Annanagar | 
              Thoraipakkam | Sholinganallur
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            whileHover={{scale : 1.1}}>
            <img class="mx-auto w-7 h-7 mr-5 cursor-pointer" src={del} alt="blr" />
            </motion.div>
            <div>
              <h3 className=" font-bold text-xl cursor-pointer">Delhi</h3>
              <p className=" text-lg pt-3 pb-4 ">
              Kirti Nagar | East Of Kailash | Kalkaji | Pitampura | Uttam Nagar | Vikaspuri | 
              Wazirpur | Malviya Nagar | Sector 10 Dwarka | Vasant Kunj | South Extension | Karol Bagh | Shakti Nagar | 
              Janakpuri | Rajouri Garden | Paschim Vihar
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            whileHover={{scale : 1.1}}>
            <img class="mx-auto w-7 h-7 mr-5 cursor-pointer" src={hyd} alt="blr" />
            </motion.div>
            <div>
              <h3 className=" font-bold text-xl cursor-pointer">Hyderabad</h3>
              <p className=" text-lg pt-3 pb-4 ">
              Nizampet | Gachibowli | Sainikpuri | Moosapet | Secunderabad | Nallagandla | 
              Banjara Hills | Madhapur | Miyapur | Dammaiguda | Uppal | Kothapet | Vivekananda Nagar | 
              Kondapur | Himayathnagar | Chandanagar | Manikonda | Kukatpally | 
              Begumpet | Jublee Hills | Bowenpally
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            whileHover={{scale : 1.1}}>
            <img class="mx-auto w-7 h-7 mr-5 cursor-pointer" src={m} alt="blr" />
            </motion.div>
            <div>
              <h3 className=" font-bold text-xl cursor-pointer">Mumbai</h3>
              <p className=" text-lg pt-3 pb-4 ">
              Waghbil | Palava | Goregaon (E) | Bandra | Parel | Kandivali (W) | Powai | Chembur | Kandivali (E) | Marol | 
              Lower Parel | Dombivali (W) | BKC | Mira Road | Bandra (W) | Andheri (W) | Waghle Estate | Ghatkopar (W) | 
              Kothari Compound | Vashi Sector 19a | Andheri (E) | Bhandup
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            whileHover={{scale : 1.1}}>
            <img class="mx-auto w-7 h-7 mr-5 cursor-pointer" src={pune} alt="blr" />
            </motion.div>
            <div>
              <h3 className=" font-bold text-xlcursor-pointer">Pune</h3>
              <p className=" text-lg pt-3 pb-4 ">
              Kharadi   |   Koregaon Park   |   Kothrud   |   Shivaji Nagar   |   Aundh | 
              Viman Nagar   |   Pimple Saudagar   |   Baner Koregaon Park   |   Kothrud   |   Shivaji Nagar   |   Aundh | Viman Nagar   
              </p>
            </div>
          </div>

        </div>

      </div>
        
        {cartShow && (
      <CartContainer/>
    )}
    </div>
  )
}

export default DeliveryArea;