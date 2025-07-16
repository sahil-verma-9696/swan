const formConfig = {
  login: {
    heading: "Sign into Swan",
    subheading: "Welcome back! Please sign in to continue.",
    controlls: [
      {
        name: "email",
        type: "email",
        placeholder: "Email",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
      },
    ],
  },
  register: {
    heading: "Create Your Account",
    subheading: "Welcome! Please fill in the details to get started.",
    controlls: [
      {
        name: "name",
        type: "text",
        placeholder: "Name",
      },
      {
        name: "handle",
        type: "text",
        placeholder: "Handle",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
      },
      {
        name: "password",
        type: "password",
        placeholder: "Password",
      },
    ],
  },
};

export default formConfig;