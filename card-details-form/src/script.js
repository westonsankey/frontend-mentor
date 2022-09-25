// ******************************************************************************
// Retrieve page elements and define form input validation callbacks
// ******************************************************************************

// Form input fields
const inputName = document.getElementById("input-name");
const inputNum = document.getElementById("input-num");
const inputExpMonth = document.getElementById("input-exp-month");
const inputExpYear = document.getElementById("input-exp-year");
const inputCvc = document.getElementById("input-cvc");

// Form input invalid message elements
const invalidMsgName = document.getElementById("invalid-msg-name");
const invalidMsgNum = document.getElementById("invalid-msg-num");
const invalidMsgExpMonth = document.getElementById("invalid-msg-exp-month");
const invalidMsgExpYear = document.getElementById("invalid-msg-exp-year");
const invalidMsgCvc = document.getElementById("invalid-msg-cvc");

// Rendered card image labels
const labelName = document.getElementById("label-name");
const labelNum = document.getElementById("label-num");
const labelExpMonth = document.getElementById("label-exp-month");
const labelExpYear = document.getElementById("label-exp-year");
const labelCvc = document.getElementById("label-cvc");

// Form field validity status
const formStatus = {
  name: { isValid: false, errorMessage: "Required" },
  num: { isValid: false, errorMessage: "Required" },
  expMonth: { isValid: false, errorMessage: "Required" },
  expYear: { isValid: false, errorMessage: "Required" },
  cvc: { isValid: false, errorMessage: "Required" },
};

// Custom validation functions for each form input field
const validation = {
  name: (_) => {
    return { isValid: true, errorMessage: "" };
  },
  num: (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/[0-9]{16}/g);
    return {
      isValid: !!matches,
      errorMessage: !!matches ? "" : "Invalid credit card number",
    };
  },
  expMonth: (value) => {
    const matches = value.match(/(1[0-2]|0[1-9])/);
    return { isValid: !!matches, errorMessage: "Invalid" };
  },
  expYear: (value) => {
    const matches = value.match(/(?:[0-9]{2})?[0-9]{2}/);
    return { isValid: !!matches, errorMessage: "Invalid" };
  },
  cvc: (value) => {
    const matches = value.match(/[0-9]{3}/);
    return { isValid: !!matches, errorMessage: "Invalid CVC" };
  },
};

// ******************************************************************************
// Form input change handler definitions and event listener registration
// ******************************************************************************

/**
 * Remove the `invalid` class from the input element and reset
 * the error message.
 *
 * @param {String}       key
 * @param {HTMLElement}  input
 * @param {HTMLElement}  message
 */
function resetWarnings(key, input, message) {
  if (!formStatus[key].isValid) {
    input.classList.remove("invalid");
    message.innerHTML = "";
  }
}

/**
 * Determine if the provided input is valid based on validation
 * rules.
 *
 * @param {HTMLElement} input
 * @param {String}      key
 */
function validateInput(input, key) {
  // Generic validation applied to all fields (cannot be blank)
  if (input.value === "") {
    formStatus[key].isValid = false;
    formStatus[key].errorMessage = "Required";
  } else {
    formStatus[key].isValid = true;
    formStatus[key].errorMessage = "";
  }

  // Check custom validation logic for inputs
  if (formStatus[key].isValid) {
    const validate = validation[key];
    const validationResult = validate(input.value);
    formStatus[key].isValid = validationResult.isValid;
    formStatus[key].errorMessage = validationResult.errorMessage;
  }

  // If all inputs are valid, enable the submit button
  if (Object.values(formStatus).every((input) => input.isValid)) {
    confirmButton.disabled = false;
  }
}

/**
 * Handle an input event. Error markup will be removed from the input
 * element and an optional format function will be applied to the input
 * before setting the value. Validation is then applied to determine if
 * the input is valid.
 *
 * @param {Event}       e
 * @param {String}      key
 * @param {HTMLElement} input
 * @param {HTMLElement} invalidMsg
 * @param {HTMLElement} label
 * @param {*}           formatter
 */
function handleInputChange(e, key, input, invalidMsg, label, formatter) {
  resetWarnings(key, input, invalidMsg);

  if (formatter) {
    const formatted = formatter(e.target.value);
    label.innerHTML = formatted;
    input.value = formatted;
  } else {
    label.innerHTML = e.target.value;
  }

  validateInput(input, key);
}

inputName.addEventListener("input", (e) =>
  handleInputChange(e, "name", inputName, invalidMsgName, labelName)
);

inputNum.addEventListener("input", (e) =>
  handleInputChange(e, "num", inputNum, invalidMsgNum, labelNum, formatCardNum)
);

inputExpMonth.addEventListener("input", (e) =>
  handleInputChange(
    e,
    "expMonth",
    inputExpMonth,
    invalidMsgExpMonth,
    labelExpMonth
  )
);

inputExpYear.addEventListener("input", (e) =>
  handleInputChange(e, "expYear", inputExpYear, invalidMsgExpYear, labelExpYear)
);

inputCvc.addEventListener("input", (e) =>
  handleInputChange(e, "cvc", inputCvc, invalidMsgCvc, labelCvc)
);

// ******************************************************************************
// Form blur logic and registration. Validation markup will only be
// rendered on blur.
// ******************************************************************************

/**
 * If an input is invalid, toggle the `invalid` class on the element
 * and set the error message. Otherwise, remove the `invalid` class
 * from the element and remove the error message.
 *
 * @param {HTMLElement} input
 * @param {HTMLElement} invalidMsgElement
 * @param {String}      key
 */
function handleBlur(input, invalidMsgElement, key) {
  if (!formStatus[key].isValid) {
    input.classList.add("invalid");
    invalidMsgElement.innerHTML = formStatus[key].errorMessage;
  } else {
    input.classList.remove("invalid");
    invalidMsgElement.innerHTML = "";
  }
}

inputName.addEventListener("blur", () =>
  handleBlur(inputName, invalidMsgName, "name")
);

inputNum.addEventListener("blur", () =>
  handleBlur(inputNum, invalidMsgNum, "num")
);

inputCvc.addEventListener("blur", () =>
  handleBlur(inputCvc, invalidMsgCvc, "cvc")
);

inputExpMonth.addEventListener("blur", () =>
  handleBlur(inputExpMonth, invalidMsgExpMonth, "expMonth")
);

inputExpYear.addEventListener("blur", () =>
  handleBlur(inputExpYear, invalidMsgExpYear, "expYear")
);

// ******************************************************************************
// Form submission logic
// ******************************************************************************

function submitForm(e) {
  e.preventDefault();
  document.getElementById("form").style.display = "none";
  document.getElementById("confirmation").style.display = "flex";
}

const confirmButton = document.getElementById("btn-submit");
confirmButton.addEventListener("click", submitForm);

// ******************************************************************************
// Utility functions
// ******************************************************************************

/**
 * Format a value as a credit card number.
 * Source: https://www.peterbe.com/plog/cc-formatter
 *
 * @param   {String} value value to be formatted as a credit card number
 * @returns {String}       formatted value
 */
function formatCardNum(value) {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}
