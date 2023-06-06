import React from 'react'

const validation = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMessage: 'Preencha um email válido'
  }
}


const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  
  function validate(value){
    if(!type){
      return true;
    }
    if(value.length === 0){
      setError('Preencha um valor');
      return false;
    }else if(validation[type] && !validation[type].regex.test(value)){
      setError(validation[type].errorMessage);
      return false;
    }else{
      setError(null);
      return true;
    }
  }

  function onChange({target}){
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),                       
  }
}

export default useForm