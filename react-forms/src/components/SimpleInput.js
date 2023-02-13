import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log('submit');
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputClasses = !nameInputIsInvalid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {(nameInputIsInvalid && <p>Name must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button type='submit' disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
