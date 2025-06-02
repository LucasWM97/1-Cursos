import "../../App.css"

export default function Card({close,img,text,buttonText,color}) {

  return(
<div className='card'>
        <img className='close' src={close} alt='close-buttom'></img>
        <img  className='cookie' src={img}></img>
        <p className='text'>{text}</p>
        <button className={color}>{buttonText}</button>
      </div>
  )
  
}


