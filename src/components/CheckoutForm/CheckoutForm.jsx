// import { useForm } from "react-hook-form"

// export const Contacto = () => {

//     const { register, handleSubmit } = useForm();

//     const enviar = (data ) => {
//         console.log(data)
//     }

//     return (
  
//         <div className='container'>
//             <h1 className='main-title'> Contactos </h1>
//             <form className='formulario' onSubmit={handleSubmit(enviar)} >
                
//                 <input type='text'
//                        placeholder='Ingresa tu nombre'
//                        {...register("nombre")}
//                        />
//                 <input 
//                        type='email'
//                        placeholder='Ingresa tu email'
//                        {...register("email")}    
//                        />
//                 <input 
//                        type='phone'
//                        placeholder='Ingrese n° celular'
//                         {...register("celular")} />
                
//                 <button className='enviar' type='submit'> Enviar </button>
//             </form>
        
//         </div>
//   )
// }


import React, { useState } from 'react'


export const CheckoutForm = ( { onConfirm } ) => {
  const [name,setName] = useState('')
  const [last, setLast] = useState(" ")
  const [phone, setPhone] = useState(' ')
  const [email, setEmail] = useState ('')
  const [confirmarEmail, setConfirmarEmail] = useState ('')
  

  const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, last, phone, email
        }

        onConfirm(userData)
  }
    
    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>

                <label className='Label'>
                     Nombre 
                    <input
                        type="text"
                        className='Input'
                        value= {name}
                        onChange={({target}) => setName(target.value)} 
                        />         
                </label>

                <label className='Label'>
                     Apellido 
                    <input
                        type="text"
                        className='Input'
                        value= {last}
                        onChange={({target}) => setLast(target.value)} 
                        />         
                </label>

                <label className='Label'> 
                    Telefono
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target}) => setPhone(target.value)}
                        />
                </label>
                
                <label className='Label'>
                     Email
                    <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({target}) => setEmail (target.value)}
                    />
                </label>

                <label>
                       Confirmar Email*
                    <input 
                        type='email' 
                        value={confirmarEmail} 
                        onChange={({target}) => setConfirmarEmail(target.value)}
                        required
                    />
                </label>

                <p>* campo obligatorio </p>
                {/* {error && <p>{error}</p>} */}

                <div className='Label'>
                    <button type='submit' className='Button'> Crear orden </button>
                </div>
            </form>
        </div>
  )
}
