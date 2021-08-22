import React from "react";
import { useFormik } from "formik";

// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '', 
      pswField: ''
    },

    onSubmit: values => {
      console.log('form:',values);
      alert('Login Successful');
    },

    validate: values => {
      let errors = {};
      const emailRegex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$','i');
      if (!values.emailField) {errors.emailField = 'Field required'}
      else if (values.emailField && emailRegex.test(values.emailField) === false) {
        errors.emailField = 'Username should be an email'}
      if (!values.pswField) errors.pswField = 'Field required'
      return errors;
    }
  });

  return (
    <div style={{width: '400px', padding:'10px', border:'1px solid lightgray'}}>
      <div style={{margin: '10px 10px 30px 10px'}}>
      <h1>Login</h1>
      </div>
      <div>
      <form onSubmit={formik.handleSubmit}>

        <div style={{display: 'flex', flexWrap:"wrap", margin: '10px'}}>
          <div style={{marginRight: '10px', width: '70px', flexGrow:1}}>Username:</div>
          <div style={{flexGrow: 2,width:'250px',marginRight: '0px'}}>
          <input style={{width: '100%'}} type="text" autoComplete="username" id='emailField' name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div id='emailError' style={{color: 'red', fontSize: '0.8em', width: '300px', flexGrow: 1}}>{formik.errors.emailField}</div> : null }
          </div>
          </div>

        <div style={{display: 'flex', flexWrap:"wrap", margin: '10px'}}>
          <div style={{marginRight: '10px', width: '70px', flexGrow: 1}}>Password:</div>
          <div style={{flexGrow: 2, width:'250px', marginRight: '0px'}}>
          <input style={{width: '100%'}} type="text" autoComplete="current-password" id='pswField' name="pswField"  onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div id='pswError' style={{color: 'red', fontSize: '0.8em', width:'300px', flexGrow: 1}}>{formik.errors.pswField}</div> : null }  
          </div>
        </div>

        <div style={{display: 'flex',margin: '15px 12px 0px 10px', width:'auto'}}>
          <div style={{width:'370px', flexShrink: 1}}></div>
          <div style={{flexShrink: 0}}>
            <button id='submitBtn' className="btn btn-primary" type="submit">Submit</button>
          </div>
       
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
