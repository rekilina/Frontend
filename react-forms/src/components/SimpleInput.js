import { useState, useEffect } from 'react';
import useValidate from '../hooks/use-validate';

const SimpleInput = (props) => {
  const [formIsTouched, setFormIsTouched] = useState(false);

  const validateName = (name) => {
    return name.trim() !== '';
  }
  const {
    enteredValue: nameValue,
    valueInputIsInvalid: nameInputIsInvalid,
    InputBlurHandler: NameInputBlurHandler,
    InputChangeHandler: NameInputChangeHandler,
    enteredValueTouched: nameTouched,
    reset: nameReset
  } = useValidate(validateName);

  const validateEmail = (email) => {
    return email.includes('@');
  }
  const {
    enteredValue: emailValue,
    valueInputIsInvalid: emailInputIsInvalid,
    InputBlurHandler: EmailInputBlurHandler,
    InputChangeHandler: EmailInputChangeHandler,
    enteredValueTouched: emailTouched,
    reset: emailReset
  } = useValidate(validateEmail);

  let formIsValid = false;

  if (!nameInputIsInvalid && !emailInputIsInvalid && formIsTouched) {
    console.log('here', nameInputIsInvalid, emailInputIsInvalid)
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  useEffect(() => {
    console.log(emailTouched || nameTouched);
    setFormIsTouched(emailTouched || nameTouched);
  },
    [emailTouched, nameTouched]);

  const formSubmissionHandler = event => {
    event.preventDefault();
    setFormIsTouched(true);
    nameReset();
    emailReset();
  }


  const nameInputClasses = !nameInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';
  const emailInputClasses = !emailInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={NameInputChangeHandler}
          onBlur={NameInputBlurHandler}
          value={nameValue}
        />
      </div>
      <div className={emailInputClasses}>
        {(nameInputIsInvalid && <p>Name must not be empty</p>)}
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={EmailInputChangeHandler}
          onBlur={EmailInputBlurHandler}
          value={emailValue}
        />
        {(emailInputIsInvalid && <p>Email must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button type='submit' disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
