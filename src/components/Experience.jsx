import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'Biosalud Diagnóstico y Tecnología S.A.S',
    period: 'Jun. 2019 - Nov. 2020',
    description: 'Prestación de servicio en la E.S.E. BELLOSALUD en Mantenimiento correctivo y preventivo de equipos médicos, odontológicos y de laboratorio, gestión documental de los equipos, acompañamiento a proveedores, capacitación de manejo y desinfección de los equipos médicos al personal asistencial y en la E.S.E. HOSPITAL MARCO FIDEL SUAREZ prestación de servicios en Mantenimiento correctivo y preventivo de equipos médicos, equipos quirúrgicos, equipos de laboratorio, gestión documental de los equipos, acompañamiento a proveedores, capacitación de manejo y desinfección de los equipos médicos',
  },
  {
    company: 'Coomsocial IPS S.A.S',
    period: 'Mar. 2017 - Ene. 2019',
    description: 'Mantenimiento correctivo y preventivo de equipos médicos y odontológicos, gestión documental de los equipos (crear hojas de vida, archivo digital y manual de documentos de los equipos) manejo de proveedores para compra de repuestos y compra de equipos médicos y odontológicos JEFE INMEDIATO: Yolima Alejandra Vásquez Hernández',
  },
  {
    company: 'Nueva Clínica Sagrado Corazón',
    period: 'Feb. 2014 - Feb. 2015',
    description: 'Mantenimiento correctivo y preventivo de equipos médicos, gestión de los equipos (crear hojas de vida, archivo digital y manual de documentos de los equipos)',
  },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiencia</h1>
      <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-teal-600 p-6 rounded-lg transition-shadow duration-300 bg-teal-200/10 transform transition-all duration-300 hover:scale-105'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 my-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience