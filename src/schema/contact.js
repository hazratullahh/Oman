import { object, string } from "yup"

export const ContactSchema = object().shape({
  firstName: string().required("First name is required").min(2, "Too short"),
  lastName: string().required("Last name is required").min(2, "Too short"),
  subject: string().required("Subject is required").min(5, "Too short"),
  email: string().email('Invalid email').required('Email is required'),
  message: string().required('Message is required'),
});