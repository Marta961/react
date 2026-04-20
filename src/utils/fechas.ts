import { differenceInDays } from 'date-fns';

/**
 * Diferencia en días entre dos fechas (fin ≥ inicio).
 * `date-fns` incluye tipos propios; no hace falta `@types/date-fns`.
 */
export function diasEntreFechas(inicio: Date, fin: Date): number {
  if (Number.isNaN(inicio.getTime()) || Number.isNaN(fin.getTime())) {
    throw new Error('Las fechas deben ser válidas');
  }
  if (fin < inicio) {
    throw new Error('La fecha fin debe ser posterior o igual a la fecha inicio');
  }
  return differenceInDays(fin, inicio);
}
