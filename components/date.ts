import { parseISO, format } from 'date-fns';
 
export default function Date({ dateString } : any) {
  const date: any = parseISO(dateString);
  return format(date, 'LLLL d, yyyy');
}