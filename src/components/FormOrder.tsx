import axios from 'axios'
import React, { useEffect } from 'react'
import { selectCart } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from 'react-redux'
import SuccessModal from '../components/SuccessModal'; // 


interface FormOrderProps {
  setOpenOrderForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormOrder: React.FC<FormOrderProps> = ({ setOpenOrderForm }) =>{
  const { products } = useSelector(selectCart)

  const [showSuccessModal, setShowSuccessModal] = React.useState<boolean>(false);


  let LIST_BY_MESSAGE:string =''

  const LIST_BY_ORDER:string[] = products && products.map((product)=>{
    return(LIST_BY_MESSAGE +=`<b>Продукт: </b>${product.name}`+`<b>Обєм: </b>${product.extent}`+`<b>  Кількість:</b>${product.count} \n`)
    
  })

  const TOKEN:string ='6035490675:AAHiOj1PMoKX3yYW3cuz4Ai0FNP_da5iFbE'
  const CHAT_ID:string ='-1001972265061'
  const URI_API:string =`https://api.telegram.org/bot${TOKEN}/sendMessage`

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
        e.preventDefault()
        let message:string =`<b>ЗАЯВКА З САЙТУ</b>\n`
        message += `<b>Замовник: </b>${nameUser} \n`
        message += `<b>Телефон: </b>${phoneUser} \n`
        message += `<b>Email: </b>${emailUser} \n`

        axios.post(URI_API,{
          chat_id: CHAT_ID,
          parse_mode:"html",
          text: message + LIST_BY_MESSAGE
        })
        setShowSuccessModal(true);
        
      }


      const handelCloseModal =()=>{
        setOpenOrderForm(false)
      }

  return (
    <div className='formOrder'>
      <div 
      onClick={handelCloseModal}
        className="closeModal"
      >
      </div>
        <div className="inputBlock">
          {(nameUserDirty && nameUserDirty) && <div className='errorForm'>{nameUserError}</div>}
            <input  onChange={ nameInputHandel} onBlur={(e) => blurHandel(e)} name='name' placeholder='NAME' className='nameUser inputOrder' value={nameUser} type="text" />

            {(phoneUserDirty && phoneUserDirty) && <div className='errorForm'>{phoneUserError}</div>}
            <input onChange={ phoneInputHandel}  onBlur={(e) => blurHandel(e)} name='phone' placeholder='PHONE' className='phoneUser inputOrder' value={phoneUser} type="text" />

            {(emailUserDirty && emailUserDirty) && <div className='errorForm'>{emailUserError}</div>}
            <input onChange={ emailInputHandel} onBlur={(e) => blurHandel(e)} name='email' placeholder='EMAIL@gmail.com' className='emailUser inputOrder' value={emailUser} type="text" />
        </div>

        <button disabled={!formVoid} type='submit' onClick={(e)=> handelSandOrder(e)} className='sendOrder'>відправити замовлення</button>
		{showSuccessModal && <SuccessModal setOpenOrderForm={setOpenOrderForm} onClose={() => setShowSuccessModal(false)} />}

    </div>
  )
}

export default FormOrder