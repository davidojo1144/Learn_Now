import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveNavbar = ({open}) => {
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
                <p>HOME</p>
              </div>
              <div className='flex gap-3'>
                <p>LEARN</p>
              </div>
              <div className='flex gap-3'>
                <p>CONTACT US</p>
              </div>
              <div className='flex gap-3'>
                <p>ABOUT</p>
              </div>
              <div className='flex gap-3'>
                <p>REVIEWS</p>
              </div>
              <div className='flex gap-3'>
                <p>LOGIN</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

export default ResponsiveNavbar
