import React,{useState} from 'react'

const CopyClipboard = ({ text, buttonText = 'Copy', successMessage }) => {
    const [copy, setCopy] = useState(false)

    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(text)
            setCopy(true)


            //reset the copied state after 2 second
            setTimeout(() => {
               setCopy(false) 
            }, 2000);
        } catch (err) {
            console.log('Failed to copy text', err)
        }
    };

  return (
   
    <button type='button' onClick={handleCopy} class={`btn ${copy ? 'btn-success' : 'btn-primary'}`} >
        {copy ? successMessage : buttonText}
    </button>
  )
}

export default CopyClipboard