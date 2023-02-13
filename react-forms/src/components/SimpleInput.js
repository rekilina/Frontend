import { useState, useEffect } from 'react';
import useValidate from '../hooks/use-validate';

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [formIsTouched, setFormIsTouched] = useState(false);

  const validateName = (name) => {
    return name.trim() !== '';
  }
  const {
    enteredValue: nameValue,
    valueInputIsInvalid: nameInputIsInvalid,
    InputBlurHandler: NameInputBlurHandler,
    InputChangeHandler: NameInputChangeHandler,
    enteredValueTouched: nameTouched
  } = useValidate(validateName);

  const validateEmail = (email) => {
    return email.includes('@');
  }
  const {
    enteredValue: emailValue,
    valueInputIsInvalid: emailInputIsInvalid,
    InputBlurHandler: EmailInputBlurHandler,
    InputChangeHandler: EmailInputChangeHandler,
    enteredValueTouched: emailTouched
  } = useValidate(validateEmail);

  let formIsValid = false;

  if (!nameInputIsInvalid && !emailInputIsInvalid && formIsTouched) {
    console.log('here', nameInputIsInvalid, emailInputIsInvalid)
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  // const [formIsValid, setformIsValid] = useState(false);
  // useEffect(() => {
  //   if (!nameInputIsInvalid && !emailInputIsInvalid) {
  //     setformIsValid(true);
  //   } else {
  //     setformIsValid(false);
  //   }
  // }, [nameInputIsInvalid, emailInputIsInvalid]);

  useEffect(() => {
    console.log(emailTouched || nameTouched);
    setFormIsTouched(emailTouched || nameTouched);
  },
    [emailTouched, nameTouched]);

  const formSubmissionHandler = event => {
    event.preventDefault();
    setFormIsTouched(true);
    console.log('submit');
    console.log(formIsValid);
    // setEnteredNameTouched(true);

    // if (!enteredNameIsValid) {
    //   return;
    // }
    // // setEnteredNameIsValid(true);
    // console.log(enteredName);
    // setEnteredName('');
    // setEnteredNameTouched(false);
  }

  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true);
  // }

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // }

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
