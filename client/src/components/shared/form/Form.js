import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import InputType from './InputType'
import { handleRegister, hanleLogin } from '../../../services/authService';
const Form = ({formType,submitBtn,formTitle}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState('donar');
  const [name, setName]=useState('');
  const [organisationName,setOrganisationName]=useState('');
  const [hospitalName,setHospitalName]=useState('');
  const [website,setWebsite]=useState('');
  const [address,setAddress]=useState('');
  const [phone,setPhone]=useState('');
   
  return (
    <div>
        <form onSubmit={(e)=>{
          if(formType==='login') return hanleLogin(e,email,password,role)
          else if(formType==='register') return handleRegister(e,name,role,email,password,organisationName,hospitalName,website,address,phone)
        }}>
          <div className="text-center">{formTitle} </div>
          <hr />
          {/* //radio button */}

          <div className="d-flex mb-3">
            <div className="form-check">
              <input 
              type="radio" 
              className='form-check-input'
              id='donarRadio'
               name='role'
                value={'donar'}
                 onChange={(e)=>setRole(e.target.value)} 
                 defaultChecked
                 />
                 <label htmlFor="donarRadio" className='form-check-label'>
                  Donar
                 </label>
            </div>
            <div className="form-check ms-2">
              <input 
              type="radio" 
              className='form-check-input'
              id='adminRadio'
               name='role'
                value={'admin'}
                 onChange={(e)=>setRole(e.target.value)} 
                
                 />
                 <label htmlFor="adminRadio" className='form-check-label'>
                  Admin
                 </label>
            </div>
            <div className="form-check ms-2 ">
              <input 
              type="radio" 
              className='form-check-input'
              id='hospitalRadio'
               name='role'
                value={'hospital'}
                 onChange={(e)=>setRole(e.target.value)} 
                 
                 />
                 <label htmlFor="hospitalRadio" className='form-check-label'>
                  Hospital
                 </label>
            </div>
            <div className="form-check ms-2">
              <input 
              type="radio" 
              className='form-check-input'
              id='organisationRadio'
               name='role'
                value={'organisation'}
                 onChange={(e)=>setRole(e.target.value)} 
                 
                 />
                 <label htmlFor="organisationRadio" className='form-check-label'>
                  Organisation
                 </label>
            </div>
          </div>
          {/* switch statment */}
          {(()=>{
            switch (formType) {
              // -------login page---------------
              case "login":{
                return (
                  <>
                  <InputType labelText={'Email'}
          labelFor={'forEmail'}
          type={'email'}
          name={'email'}
          value={email}
          onChange={(e)=>{ setEmail(e.target.value)}}
          ></InputType>
          <InputType labelText={'Password'}
          labelFor={'forPassword'}
          type={'password'}
          name={'password'}
          value={password}
          onChange={(e)=>{ setPassword(e.target.value)}}
          ></InputType>
                  </>
                )}
               
            //------register page----------
              case "register":{
                return (
                  <>
          
          {(role==='admin' || role ==='donar') && (
            <InputType labelText={'Name'}
            labelFor={'forName'}
            type={'text'}
            name={'name'}
            value={name}
            onChange={(e)=>{ setName(e.target.value)}}
            ></InputType>
          )}
          
          {(role==='organisation')&&(
            <InputType labelText={'Organisation Name'}
            labelFor={'forOrganisation'}
            type={'text'}
            name={'organisationName'}
            value={organisationName}
            onChange={(e)=>{ setOrganisationName(e.target.value)}}
            ></InputType>
          )}
          
            {role==='hospital' && (
              <InputType labelText={'Hospital Name'}
              labelFor={'forhospitalName'}
              type={'text'}
              name={'hospitalName'}
              value={hospitalName}
              onChange={(e)=>{ setHospitalName(e.target.value)}}
              ></InputType>
            )}
          

          <InputType labelText={'Email'}
          labelFor={'forEmail'}
          type={'email'}
          name={'email'}
          value={email}
          onChange={(e)=>{ setEmail(e.target.value)}}
          ></InputType>

          <InputType labelText={'Password'}
          labelFor={'forPassword'}
          type={'password'}
          name={'password'}
          value={password}
          onChange={(e)=>{ setPassword(e.target.value)}}
          ></InputType>

          <InputType labelText={'Website'}
          labelFor={'forWebsite'}
          type={'text'}
          name={'website'}
          value={website}
          onChange={(e)=>{ setWebsite(e.target.value)}}
          ></InputType>

          <InputType labelText={'Address'}
          labelFor={'forAddress'}
          type={'text'}
          name={'Address'}
          value={address}
          onChange={(e)=>{ setAddress(e.target.value)}}
          ></InputType>

          <InputType labelText={'Phone No.'}
          labelFor={'forPhone'}
          type={'text'}
          name={'phone'}
          value={phone}
          onChange={(e)=>{ setPhone(e.target.value)}}
          ></InputType>

                  </>
                )}
            }
          })()}
          

          <div className="d-flex flex-row justify-content-between">
            {formType==='login' ? (
              <p>Not registered yet ? Register
                <Link to='/register' >  Here!</Link> </p>
            ):<p> Already user please
            <Link to='/login' >  Login !</Link> </p>}
            <button className='btn btn-primary' type='submit'>
              {submitBtn}
            </button>
          </div>

        </form>
    </div>
  )
}

export default Form 