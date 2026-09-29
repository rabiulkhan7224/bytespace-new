export const REGISTER = {
  left: {
    heading: "Sign up and come in",
    body: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  },
  form: {
    eyebrow: "Create an Account",
    heading: "Welcome to ByteSpace",
    fields: {
      fullName: { label: "Full Name", placeholder: "Jamie Davis" },
      email: { label: "Email", placeholder: "designer@example.com" },
      password: { label: "Password", placeholder: "••••••••" },
    },
    submit: "Continue",
    footer: {
      prompt: "Already have an account?",
      linkLabel: "Login",
      linkHref: "/login",
    },
  },
} as const;

export const LOGIN = {
  left: {
    heading: "Sign in with ease",
    body: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
  form: {
    eyebrow: "Sign In",
    heading: "Welcome Back",
    fields: {
      email: { label: "Email", placeholder: "designer@example.com" },
      password: { label: "Password", placeholder: "••••••••" },
    },
    submit: "Sign In",
    dividerLabel: "or",
    social: {
      google: { label: "Continue with Google", icon: "/icons/google.png" },
      facebook: {
        label: "Continue with Facebook",
        icon: "/icons/facebook.png",
      },
    },
    footer: {
      prompt: "New user?",
      linkLabel: "Create an account",
      linkHref: "/register",
    },
  },
} as const;
