export type DayFormatter = (date: Date) => Date | string;
export type weekFormatter = (week: Date[]) => Date[] | string;

export class Calendar {
  constructor(firstWeekDay?: number);

  weekStartDate(date: Date): Date;
  monthDates(
    year: number,
    month: number,
    dayFormatter?: DayFormatter,
    weekFormatter?: weekFormatter
  ): Date[];
}
