import React from 'react'

const FormOrder:React.FC = () => {
    const [nameUser,setNameUser ] =React. useState<string>('')
    const [phoneUser,setPhoneUser ] =React. useState<string>('')
    const [emailUser,setEmailUser ] =React. useState<string>('')

     const handelSandOrder =(e:React.MouseEvent<HTMLButtonElement>)=>{

     }

//       const handelInput=()=>{
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//       }

  return (
    <div className='formOrder'>
      <div className="closeModal"></div>
        <div className="inputBlock">
           <input placeholder='NAME' className='nameUser inputOrder' value={nameUser} type="text" />
            <input placeholder='PHONE' className='phoneUser inputOrder' value={phoneUser} type="text" />
            <input placeholder='EMAIL@gmail.com' className='emailUser inputOrder' value={emailUser} type="text" />
        </div>
        <button onClick={(e)=> handelSandOrder(e)} className='sendOrder'>відправити замовлення</button>
    </div>
  )
}

export default FormOrder