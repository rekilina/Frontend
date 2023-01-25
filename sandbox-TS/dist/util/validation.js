export function validate(ValidatableInput) {
    let isValid = true;
    if (ValidatableInput.required) {
        isValid = isValid && ValidatableInput.value.toString().trim().length !== 0;
    }
    if (ValidatableInput.minLength !== undefined &&
        typeof ValidatableInput.value === 'string') {
        isValid = isValid &&
            ValidatableInput.value.toString().trim().length >= ValidatableInput.minLength;
    }
    if (ValidatableInput.maxLength !== undefined &&
        typeof ValidatableInput.value === 'string') {
        isValid = isValid &&
            ValidatableInput.value.toString().trim().length <= ValidatableInput.maxLength;
    }
    if (ValidatableInput.min != undefined
        && typeof ValidatableInput.value === 'number') {
        isValid = isValid &&
            ValidatableInput.value >= ValidatableInput.min;
    }
    if (ValidatableInput.max != undefined
        && typeof ValidatableInput.value === 'number') {
        isValid = isValid &&
            ValidatableInput.value <= ValidatableInput.max;
    }
    return isValid;
}
//# sourceMappingURL=validation.js.map