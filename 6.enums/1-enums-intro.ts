enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

interface DoctorsAppointment {
    day: WeekDay
}

let a: DoctorsAppointment = {
    day: WeekDay.Monday //0
}