import React, { useState } from 'react'


export const CheckoutForm = ( { onConfirm } ) => {
  const [name,setName] = useState('')
  const [phone, setPhone] = useState(' ')
  const [email, setEmail] = useState ('')
  
  const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
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
                        onChange={({target}) => setName(target.value)} 
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

                <p>* campo obligatorio</p>
                {error && <p>{error}</p>}

                <div className='Label'>
                    <button type='submit' className='Button'> Crear orden </button>
                </div>
            </form>
        </div>
  )
}
