import React, { useRef, useState } from 'react';
import styles from './Checkout.module.scss';
import { CheckoutProps } from './CheckoutProps';

function isEmpty(value: string) {
  return value.trim() === '';
}

function isFiveChars(value: string) {
  console.log(value);
  return value.trim().length === 5;
}

function Checkout({ onCancel, onConfirm }: CheckoutProps) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  function confirmHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;
    const enteredPostalCode = postalCodeInputRef.current?.value;

    const enteredNameIsValid = enteredName ? !isEmpty(enteredName) : false;
    const enteredStreetIsValid = enteredStreet
      ? !isEmpty(enteredStreet)
      : false;
    const enteredCityIsValid = enteredCity ? !isEmpty(enteredCity) : false;
    const enteredPostalCodeIsValid = enteredPostalCode
      ? isFiveChars(enteredPostalCode)
      : false;

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    if (enteredName && enteredStreet && enteredCity && enteredPostalCode) {
      onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
      });
    }
  }

  const nameControlClasses = `${styles.control} ${
    formInputsValidity.name ? '' : styles.invalid
  }`;

  const streetControlClasses = `${styles.control} ${
    formInputsValidity.street ? '' : styles.invalid
  }`;

  const postalCodeControlClasses = `${styles.control} ${
    formInputsValidity.postalCode ? '' : styles.invalid
  }`;

  const cityControlClasses = `${styles.control} ${
    formInputsValidity.city ? '' : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid City!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
