import { RowDataPacket } from "mysql2";

export interface UserType extends RowDataPacket {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}