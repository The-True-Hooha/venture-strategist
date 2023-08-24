export function formatDate(dateString, options) {
  console.log('Received dateString:', dateString, options);

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateString);
    return '';
  }

  const { format } = new Intl.DateTimeFormat('en-US', options);
  return format(date);
}