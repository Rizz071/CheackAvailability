import { DayFreeTime, DayPeriod, DummyUser, WeekFreeTime } from "../types";
import randomNames from "../randomNames.json"



// Service function to generate shdule for one user
const generateDayFreeTime = (): DayFreeTime => {

    // Generating startTime and endTime in free time period
    const startTime = Math.round(Math.random() * 24);
    const endTime = startTime + Math.round(Math.random() * (24 - startTime));

    // Creating object dayPeriod with generated keys and values
    const dayPeriod: DayPeriod = {
        startTime,
        endTime
    }

    // Creating object dayFreeTime with generated dayPeriod
    const dayFreeTime: DayFreeTime = {
        freeTimePeriods: [dayPeriod]
    };

    // Returning object dayFreeTime
    return dayFreeTime;
}

// Creating array of dummy users
// users_amount - number of users to generate
const generateUsers = (users_amount: number): DummyUser[] => {

    let generatedUsers: DummyUser[] = [];

    for (let i = 0; i <= users_amount; i++) {
        const generatedUserWeekFreeTime: WeekFreeTime = {
            Sunday: generateDayFreeTime(),
            Monday: generateDayFreeTime(),
            Tuesday: generateDayFreeTime(),
            Wednesday: generateDayFreeTime(),
            Thursday: generateDayFreeTime(),
            Friday: generateDayFreeTime(),
            Saturday: generateDayFreeTime()
        };

        const dummyUser: DummyUser = {
            id: i,
            userName: randomNames[i].username,
            freeTime: generatedUserWeekFreeTime
        }

        generatedUsers = generatedUsers.concat(dummyUser);
    }

    return generatedUsers;
}



export { generateUsers };

