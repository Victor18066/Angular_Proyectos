export interface Passenger {
    id:number,
    fullname: string,
    checkedIn: boolean,
    checkInDate?: number,
    children: Child[] | null,
    nationality: string | null
}

export interface Child {
    name: string,
    age:number
}