export function fmtDate(d: Date): string {
  const day = String(d.getUTCDate()).padStart(2, '0');
  const mon = d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toLowerCase();
  const yr = d.getUTCFullYear();
  return `${day} ${mon} ${yr}`;
}
export function byDateDesc(a: { data: { date: Date } }, b: { data: { date: Date } }) {
  return b.data.date.getTime() - a.data.date.getTime();
}
