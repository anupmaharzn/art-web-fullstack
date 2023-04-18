export const shippingFormConfig = {
  name: {
    required: "Full Name is required.",
    minLength: {
      value: 3,
      message: "*Full Name is too short.",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "*Invalid Email Format ",
    },
  },
  address: {
    required: "* Address Required",
  },
  contact: {
    required: "* Contact Number required",
    minLength: {
      value: 10,
      message: "* 10 digit number",
    },
    maxLength: {
      value: 10,
      message: "* 10 digit number",
    },
    pattern: {
      value: /[0-9]{10}/,
    },
  },
  city: {
    required: "* City Required",
  },
  country: {
    require: "* Select Country",
  },
  postalcode: {
    required: "* postalcode required",
    minLength: {
      value: 5,
      message: "* 5 digit number",
    },
    maxLength: {
      value: 5,
      message: "* 5 digit number",
    },
  },
};
