export default function formatPhoneNumber(phone: number) {
  const phoneLength = phone.toString().length;
  if (phoneLength === 9) {
    return `+254${phone}`;
  } else if (phone.toString().startsWith("254")) {
    return `+${phone}`;
  } else return phone;
}
