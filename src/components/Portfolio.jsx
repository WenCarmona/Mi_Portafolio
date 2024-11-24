import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import {FaWhatsappSquare } from 'react-icons/fa'
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "Desfibrilador Mindray",
    description: "BeneHeart D6, un desfibrilador-monitor bifásico profesional, responde a los requisitos de los profesionales médicos de los hospitales y las clínicas de todo el mundo.El diseño ergonómico, duradero y compacto del desfibrilador D6 hace que sea apto para su uso en emergencias. Su contrastada tecnología garantiza una unidad sólida, preparada para utilizarse en diversos entornos. Gracias a sus diferentes modos de funcionamiento (desfibrilación manual, DEA, marcapasos y modo de monitorización), tendrá el control de cualquier situación.",
    links: {
      site: "#",
      whatsapp: "#",
    },
  },
  {
    img: project2,
    title: "Máquina de anestesia Drager",
    description: "Drager Atlan A300/A300XL ​La nueva plataforma ofrece flexibilidad para la mayoría de espacios de trabajo. El ventilador de pistón de alta precisión apoya la ventilación pulmonar protectora y un amplio conjunto de parámetros ayudan a la toma de decisiones. El Atlan A300/XL puede comunicarse de forma bidireccional y segura con otros dispositivos conectados en red para compartir datos que pueden ayudar a aumentar la eficiencia y reducir los errores.",
    links: {
      site: "#",
      whatsapp: "#",
    },
  },
  {
    img: project3,
    title: "Electrocardiógrafo Mindray",
    description: 'BeneHeart R3  utiliza el algoritmo de análisis de ECG de la Universidad de Glasgow, una de las interpretaciones de ECG en reposo líderes en el mundo con 40 años de historia. El algoritmo de Glasgow es el primero que se basa en variables específicas, como la edad, el sexo, la raza, la medicación y la clase, con el fin de maximizar la precisión de la interpretación del ECG. En el informe, un titular puede destacar una de varias "advertencias de valor crítico" para alertar a los asistentes médicos de los hallazgos que necesitan atención inmediata.',
    links: {
      site: "#",
      whatsapp: "#",
    },
  },
  {
    img: project4,
    title: "Incubadora Drager",
    description: "La incubadora Resuscitaire es el acompañante ideal para los partos. Combina una plataforma de terapia de calentado con los componentes necesarios para los procesos de emergencia clínica y resucitación. La tecnología de sílice de cuarzo y un elemento calefactor rápido permiten proporcionar una calefacción completa y distribuida por igual. Un reflector parabólico permite distribuir el calor por igual por toda la superficie del calor. El modo pre-calentador permite que los cuidadores puedan centrarse en la madre y el bebé, sin que tengan que dedicar tiempo a silenciar alarmas.",
    links: {
      site: "#",
      whatsapp: "#",
    },
  },
  {
    img: project5,
    title: "Analizador de orina Mindray",
    description: "EU-5600 Pro/5300 Pro, Tres funciones integradas en un único sistema para gestionar las necesidades únicas de flujo de trabajo de su laboratorio, La integración de la química seca, el elemento formado y el análisis de fase RBC conduce a una gran mejora en la eficiencia de la gestión del tiempo y el espacio. Incluso una sola persona puede gestionar fácilmente los requisitos de TAT durante las horas punta de su laboratorio. Imágenes nítidas 2K a todo color, lo que reduce la tasa de revisión microscópica manual de muestras positivas, Alto volumen de análisis de partículas de sedimentos para evitar el diagnóstico erróneo de muestras positivas. ",
    links: {
      site: "#",
      whatsapp: "#",
    },
  },
  {
    img: project6,
    title: "Monitor de signos vitales Drager",
    description: "Infinity® Acute Care System Mejore su flujo de trabajo con Infinity® Acute Care System. Su monitor multiparamétrico se integra con la estación de trabajo en red para mostrar las constantes vitales en tiempo real y acceder a los sistemas clínicos del hospital y a las aplicaciones de gestión de datos. Se obtiene así información detallada sobre el paciente para un riguroso análisis.",
    links: {
      site: "#",
      whatsapp: "#",
    },
  },
]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portafolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>

            <div className='w-full md:w-1/2 p-4'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110'
              />
            </div>

            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4 transition-colors duration-300 hover:text-teal-500'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a
                  href={project.links.site}
                  className='px-4 py-2 bg-teal-600 text-gray-200 rounded-lg hover:text-fuchsia-900 transition duration-300'
                >
                  Ir al sitio
                </a>
                <a
                  href={project.links.site}
                  className='px-4 py-2 bg-teal-600 text-gray-200 rounded-lg hover:text-fuchsia-900 transition duration-300'
                >
                  <FaWhatsappSquare  className='text-3xl'/>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default Portfolio
