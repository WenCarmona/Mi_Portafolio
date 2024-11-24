import React from 'react'
import Reveal from "./Reveal"


const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
      <Reveal>
      <div className='grid md:grid-cols-2 place-items-center'>
        <div>
          <div className='text-gray-300 my-3'>
            <h3 className='text-4xl font-semibold mb-5'>Sobre <span>Mi</span></h3>
            <p className='text-justify leading-7 w-11/12'>
           Soy una biomedica proactiva, responsable y llena de amor por mi trabajo, 
           cada día me esfuerzo por ser mejor y brindar la mejor experiencia 
           a mis clientes para obtener excelentes resultados.
            </p>
          </div>
          <div className='flex mt-10 items-center gap-7'>
            <div className='bg-grey-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 text-white'>
                4 <span>+</span>
              </h3>
              <p className='text-xs md:text-base rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110'><span>años de experiencia</span></p>
            </div>
            <div className='bg-grey-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 text-white'>
                30 <span>+</span>
              </h3>
              <p className='text-xs md:text-base rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110'><span>Clientes felices</span></p>
            </div>
          </div>
        </div>

        <form
          action="https://getform.io/f/bzyyqnna"
          method='POST'
          className='max-w-6xl p-5 md:p-12'
          id='form'
        >
          <p className='text-gray-100 font-bold text-xl mb-2'>
            Contáctame
          </p>
          <input
            type="text"
            id="name"
            placeholder='Tu nombre...'
            name='name'
            className='mb-2 w-full rounded-md border border-teal-900 py-2 pl-2 pr-4'
          />
          <input
            type="email"
            id="email"
            placeholder='Tu correo...'
            name='email'
            className='mb-2 w-full rounded-md border border-teal-600 py-2 pl-2 pr-4'
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Tu mensaje ..."
            className="w-full py-3 rounded-md text-gray-800 font-semibold text-xl pl-2 "
          />
          <button
              type="submit"
              className="w-full py-2 text-gray-100 rounded-md border border-teal-600 font-semibold text-xl bg-primary-color"
          >Enviar mensaje
          </button>
        </form>
      </div>
      </Reveal>

    </div>
  )
}

export default Contact