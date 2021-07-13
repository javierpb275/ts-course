enum WeekDay2 {
    Monday = 1,
    Tuesday,//2
    Wednesday,//3
    Thursday,//4
    Friday,//5
    Saturday,//6
    Sunday//7
}

interface DoctorsAppointment2 {
    day: WeekDay2
}

let a2: DoctorsAppointment2 = {
    day: WeekDay2.Monday //1
}

//-----------------------------------

enum WeekDay3 {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
}

interface DoctorsAppointment3 {
    day: WeekDay3
}

let a3: DoctorsAppointment3 = {
    day: WeekDay3.Monday //monday
}