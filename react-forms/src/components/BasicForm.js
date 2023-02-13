import { useState, useEffect } from 'react';
import useValidate from '../hooks/use-validate';

const BasicForm = (props) => {
  const [formIsTouched, setFormIsTouched] = useState(false);

  const validateName = (name) => {
    return name.trim() !== '';
  }
  const {
    enteredValue: nameValue,
    valueInputIsInvalid: nameInputIsInvalid,
    InputBlurHandler: nameInputBlurHandler,
    InputChangeHandler: nameInputChangeHandler,
    enteredValueTouched: nameTouched,
    reset: nameReset
  } = useValidate(validateName);
  const {
    enteredValue: surnameValue,
    valueInputIsInvalid: surnameInputIsInvalid,
    InputBlurHandler: surnameInputBlurHandler,
    InputChangeHandler: surnameInputChangeHandler,
    enteredValueTouched: surnameTouched,
    reset: surnameReset
  } = useValidate(validateName);

  const validateEmail = (email) => {
    return email.includes('@');
  }
  const {
    enteredValue: emailValue,
    valueInputIsInvalid: emailInputIsInvalid,
    InputBlurHandler: emailInputBlurHandler,
    InputChangeHandler: emailInputChangeHandler,
    enteredValueTouched: emailTouched,
    reset: emailReset
  } = useValidate(validateEmail);

  let formIsValid = false;

  if (!nameInputIsInvalid && !nameInputIsInvalid && !emailInputIsInvalid && formIsTouched) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  useEffect(() => {
    setFormIsTouched(emailTouched || nameTouched || surnameTouched);
  },
    [emailTouched, nameTouched, surnameTouched]);

  const formSubmissionHandler = event => {
    event.preventDefault();
    setFormIsTouched(true);
    nameReset();
    emailReset();
    surnameReset();
  }


  const nameInputClasses = !nameInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';
  const emailInputClasses = !emailInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';
  const surnameInputClasses = !surnameInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
          />
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor='surname'>Last Name</label>
          <input
            type='text'
            id='surname'
            onChange={surnameInputChangeHandler}
            onBlur={surnameInputBlurHandler}
            value={surnameValue}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailValue}
        />
      </div>
      <div className='form-actions'>
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
