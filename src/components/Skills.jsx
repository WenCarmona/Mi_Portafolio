import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiRubyRough,
  DiRor,
  DiPython,
  DiDjango,
  DiPhp,
  DiLaravel,
  DiIllustrator,
  DiPhotoshop,
  DiReact,
  DiMongodb,
  DiPostgresql,
  DiAndroid,
  DiWordpress,
  DiGithubBadge,
  DiSqllite,
  DiBootstrap,
} from 'react-icons/di'
import { RiTailwindCssFill } from "react-icons/ri";
import { FcSynchronize } from "react-icons/fc";
import Reveal from './Reveal'


const habilidades = [
  {
    category: 'Biomédica',
    technologies: [
      {name: 'Mtto. preventivo', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Mtto correctivo', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Gestión documental', icon:<FcSynchronize className='mx-2'/>},
      {name: 'Venta de equipos', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Compra de equipos', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Compra de repuestos', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Venta de repuestos', icon: <FcSynchronize className='mx-2'/>},
      {name: 'especialista equipos odontológicos', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Programación de calibraciones', icon: <FcSynchronize className='mx-2'/>},
      {name: 'Programación de Mantenimientos', icon: <FcSynchronize className='mx-2'/>},
    ]
  },

  {
    category: 'Programación',
    technologies: [
      {name: 'Html', icon: <DiHtml5 className='text-orange-600 mx-2'/>},
      {name: 'Css', icon: <DiCss3 className='text-blue-500 mx-2'/>},
      {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-400 mx-2'/>},
      {name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-500 mx-2'/>},
      {name: 'Python', icon: <DiPython className='text-yellow-500 mx-2'/>},
      {name: 'React', icon: <DiReact className='text-blue-500 mx-2'  />},
      {name: 'Django', icon: <DiDjango className='text-green-700 mx-2'/>},
    ]
  },
  
]


const Habilidades = () => {
  return (
    <div className='max-w-[650px] mx-auto flex felx-col justify-center px-4 text-gray-200 pb-8 md:py-12' id="habilidades">
      <Reveal>
        <h2 className='text-3xl font-bold mb-4 text-center'>Habilidades</h2>
        <p className='text-center mb-8'>
          Realizo diferentes funciones como biomédica, como programadora tengo habilidad en tecnologías
          importantes, puedes consultar información adicional dando 
          click <a href="#" className='underline'> Aquí</a>
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {habilidades.map((habilidades, index) => (
                <div key={index} className="border border-teal-600 p-6 rounded-lg bg-teal-600/30 shadow-lg
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-2 text-center">{habilidades.category}</h3>
                    <div className="grid gap-4">
                        {habilidades.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </Reveal>

    </div>
  )
}

export default Habilidades