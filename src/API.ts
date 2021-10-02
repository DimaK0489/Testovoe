import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true
})
export const usersAPI = {
    getUsers() {
        return instance.get<Array<UsersType>>('users')
    }
}

export type UsersType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType,
    phone: number,
    website: string,
    company: CompanyType
}
export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: GeoLocationType
}
export type GeoLocationType = {
    lat: number,
    lng: number
}
export type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}
