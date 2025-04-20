import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ResponsiveNavbar = ({open}) => {

  const navigate = useNavigate()


    return (
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className=' top-[8] left-0 z-10 shadow-lg m-4 h-[35vh] md:hidden bg-sky-400 rounded-xl uppercase'
          >
            <div className='p-5 space-y-6'>
              <div className='flex gap-3'>
                <p onClick={()=>navigate("/")}>HOME</p>
              </div>
              <div className='flex gap-3'>
                <p onClick={()=>navigate("/learn")}>LEARN</p>
              </div>
              <div className='flex gap-3'>
                <p onClick={()=>navigate("/contactus")}>CONTACT US</p>
              </div>
              <div className='flex gap-3'>
                <p onClick={()=>navigate("/about")}>ABOUT</p>
              </div>
              <div className='flex gap-3'>
                <p onClick={()=>navigate("/review")}>REVIEWS</p>
              </div>
              <div className='flex gap-3'>
                <p onClick={()=>navigate("/login")}>LOGIN</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

export default ResponsiveNavbar
