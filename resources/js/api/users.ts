import {bxios}                 from "../bxios";
import {ResourceResponse}      from "../types";
import {OrderStore, OrderType}    from "../models/orders";
import {UserProperties, UserType} from "../models/users";

export const users = {
    index: () => bxios()
        .get('users')
        .send<ResourceResponse<UserType[]>>(),
    update: (id: number, data: Partial<UserProperties>) => bxios()
        .patch('users', id)
        .body(data)
        .send<ResourceResponse<UserType>>(),
};