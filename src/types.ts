export interface DayPeriod {
    startTime: number;
    endTime: number;
}

export interface DayFreeTime {
    freeTimePeriods: DayPeriod[];
}

export interface WeekFreeTime {
    Sunday: DayFreeTime;
    Monday: DayFreeTime;
    Tuesday: DayFreeTime;
    Wednesday: DayFreeTime;
    Thursday: DayFreeTime;
    Friday: DayFreeTime;
    Saturday: DayFreeTime;
}

export interface DummyUser {
    id: number;
    userName: string;
    freeTime: WeekFreeTime;
}