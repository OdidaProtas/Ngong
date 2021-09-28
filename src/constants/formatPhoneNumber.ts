export default function formatPhoneNumber(phone: number) {
  const phoneLength = phone.toString().length;
  if (phoneLength === 9) {
    return `+254${phone}`;
  } else return phone;
}
