import { AbstractControl } from '@angular/forms';
import { formatDate } from '@angular/common';


export function minDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en'); // Get current date in the format 'yyyy-MM-dd'
  const selectedDate = control.value;

  if (selectedDate && selectedDate < currentDate) {
    return { minDate: true };
  }

  return null;
}
