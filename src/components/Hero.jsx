import React from 'react';
import profilepic from '../assets/profpic.png';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiDjango,
  
} from 'react-icons/di';
import { motion } from 'framer-motion';
import { FaWhatsappSquare } from 'react-icons/fa';
import DragerLogo from '../assets/drager.svg';
import MindrayLogo  from '../assets/mindray.svg';


const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
      
        >
          <TypeAnimation
            sequence={[
              'Tecnóloga Biomédica',
              1000,
              'Especialista en equipos Odontológicos',
              1000,
              'Metróloga',
              1000,
            
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold text-teal-500 text-xl md:text-5xl italic- mb-4'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            Hola, Bienvenidos a mi portafolio, soy <br />
            <span className='text-teal-500'>Wendy Carmona</span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
          >
            Biomédica con más de 4 años de experiencia y programadora en formación.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex flex-row items-center gap-6 my-4 md:mb-0'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgba(0,0,0,0.3)',
              }}
              className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-teal-600 rounded-xl'
            >
              <a
                href='/cv.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                Descargar CV
              </a>
            </motion.button>

            <div className='flex gap-6 flex-row text-4xl md:text-6xl text-teal-500 z-20'>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href='https://wa.me/573012992459'
                target='_blank'
              >
                <FaWhatsappSquare />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className='w-[200px] md:w-[350px] rounded-lg shadow-lg'
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24'
      >
        <p className='text-gray-100 mr-4 text-4xl'> Mis lenguajes de programación</p>
        <DiHtml5 className='text-orange-600 mx-2' />
        <DiCss3 className='text-blue-500 mx-2' />
        <DiJavascript1 className='text-yellow-400 mx-2' />
        <DiPython className='text-yellow-400 mx-2' />
        <DiDjango className='text-green-600 mx-2' />
      

        <p className='text-gray-100 mr-6 text-4xl'> Distribuidora autorizada</p>
        <img src={DragerLogo} alt="Logo" className="w-28 h-28 mx-4" />
        <img src={MindrayLogo } alt="Logo" className="w-28 h-28 mx-4"/>
        
      </motion.div>

      <div className='absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;