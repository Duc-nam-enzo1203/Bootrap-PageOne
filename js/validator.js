// Validator({
//   form: "form",
//   rules: [Validator.isRequired("#fullName"), Validator.isEmail("#email")],
// });

function Validator(options) {
  //do the misson check validate
  function Validate(inputElement, rule) {
    var errorElement = document.querySelector(".form-message");
    // var parentElement = document.querySelector(".form-group");
    var errorMessage = rule.check(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.classList.remove("invalid");
    }
  }

  //   Get element form
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      //   var errorElement =
      //     inputElement.parentElement.querySelector(".form-message");

      if (inputElement) {
        // out blur
        inputElement.onblur = function () {
          Validate(inputElement, rule);
        };
      }
    });
  }
}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    check: function (value) {
      // return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    check: function (value) {
      // var regex =
      //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      //   return regex.check(value) ? undefined : "Trường này phải là email";
      //   return regex.check(value) ? undefined : "Vui lòng nhập trường này";
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};
