import { cookies } from "next/headers";
import { decrypt } from "./cookie";
import { db } from "@/lib/db";
import { UserType } from "@/DataTypes/data.types";

export async function getAuthUser() {
    try {
        const cookieData = await cookies();
        const session = cookieData.get("session")?.value;
        if (!session) return null;

        const data = await decrypt(session);

        const [row] = await db.query<UserType[]>("SELECT * from user WHERE id=?", [data.userId]);
        console.log("row---", row[0])

        return row[0];
    } catch (error) {

    }
}