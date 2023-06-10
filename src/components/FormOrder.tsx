import React, { useEffect } from 'react'

const FormOrder:React.FC = () => {

    const [nameUser,setNameUser ] =React. useState<string>('')
    const [phoneUser,setPhoneUser ] =React. useState<string>('')
    const [emailUser,setEmailUser ] =React. useState<string>('')

    const [nameUserDirty,setNameUserDirty ] =React. useState<boolean>(false)
    const [phoneUserDirty,setPhoneUserDirty ] =React. useState<boolean>(false)
    const [emailUserDirty,setEmailUserDirty ] =React. useState<boolean>(false)

    const [nameUserError,setNameUserError ] =React. useState<string>('Поле NAME не може бути пустим')
    const [phoneUserError,setPhoneUserError ] =React. useState<string>('Поле PHONE не може бути пустим')
    const [emailUserError,setEmailUserError ] =React. useState<string>('Поле ERROR не може бути пустим')

    const[formVoid, setFormVoid] = React.useState<boolean>(false)

    React. useEffect(() => {
      if (nameUserError || phoneUserError || emailUserError) {
        setFormVoid(false)
      }else{
        setFormVoid(true)
      }
    }, [nameUserError, phoneUserError, emailUserError])
    

    const blurHandel =(e:React.FocusEvent<HTMLInputElement>) =>{
      switch (e.target.name) {
        case 'name':
          setNameUserDirty(true)
          break;
        case 'phone':
          setPhoneUserDirty(true)
          break;
        case 'email':
          setEmailUserDirty(true)
          break;

      }
    }

    const nameInputHandel = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setNameUser(e.target.value)
      if (e.target.value.length === 0 ) {
        setNameUserError("Поле NAME не може бути пустим")
      }else{
        setNameUserError("")
      }
    }
    const phoneInputHandel = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setPhoneUser(e.target.value)

      const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      if (!re.test(String(e.target.value).toLowerCase())) {
        setPhoneUserError('Некоректний номер телефону')
      }else{
        setPhoneUserError('')
      }
    }
    const emailInputHandel = (e :React.ChangeEvent<HTMLInputElement>)=>{
      setEmailUser(e.target.value)
      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(e.target.value).toLowerCase())) {
              setEmailUserError('Некоректний EMAIL')
            }else{
              setEmailUserError('')
            }
         
    }



     const handelSandOrder =(e:React.MouseEvent<HTMLButtonElement>)=>{
      console.log('handelSandOrder')
     }


  return (
    <div className='formOrder'>
      <div className="closeModal"></div>
        <div className="inputBlock">
          {(nameUserDirty && nameUserDirty) && <div className='errorForm'>{nameUserError}</div>}
           <input  onChange={ nameInputHandel} onBlur={(e) => blurHandel(e)} name='name' placeholder='NAME' className='nameUser inputOrder' value={nameUser} type="text" />

           {(phoneUserDirty && phoneUserDirty) && <div className='errorForm'>{phoneUserError}</div>}
            <input onChange={ phoneInputHandel}  onBlur={(e) => blurHandel(e)} name='phone' placeholder='PHONE' className='phoneUser inputOrder' value={phoneUser} type="text" />

            {(emailUserDirty && emailUserDirty) && <div className='errorForm'>{emailUserError}</div>}
            <input onChange={ emailInputHandel} onBlur={(e) => blurHandel(e)} name='email' placeholder='EMAIL@gmail.com' className='emailUser inputOrder' value={emailUser} type="text" />
        </div>

        <button disabled={!formVoid} type='submit' onClick={(e)=> handelSandOrder(e)} className='sendOrder'>відправити замовлення</button>
    </div>
  )
}

export default FormOrder