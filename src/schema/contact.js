import { object, string } from "yup"

export const ContactSchema = object().shape({
  email: string().email('Invalid email').required('Email is required'),
  message: string().required('Message is required'),
});