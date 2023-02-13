import { useRef, useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef('');
  const [enteredName, setEneteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    console.log('name is valid');
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEneteredName(event.target.value);

    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
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
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {(nameInputIsInvalid && <p>Name must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
