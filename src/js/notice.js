import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css'

export default function myNotification() {
  return error ({title: 'Uh, no!', text: 'Too many matches found. Enter a more specific query', role: false});
};
