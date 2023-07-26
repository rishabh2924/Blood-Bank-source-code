import React from 'react'

const InputType = ({labelText,labelFor,type,value,onChange,name}) => {
  return (
    <>
    <div className='mb-1'>
        <label htmlFor={labelFor}
         className="form-label">
            {labelText}
            </label>
          <input type={type}
           className="form-control"
             
            name={name}
            value={value}
            onChange={onChange}
             />
    </div>
    </>
  )
}

export default InputType