import Dexie, { EntityTable } from "dexie";
import { Product } from "@/types/product";
import { User } from "@/types/user";

class POSUniversalDexie extends Dexie {
    products!: EntityTable<Product, "id">;
    users!: EntityTable<User, "id">;
    constructor() {
        super("POS_UniversalDB_0012");
        this.version(1).stores({
            products: "++id,name,price,stock",
            users: "++id,guid,name,email,username,isActive",
        });
    }
}

const db = new POSUniversalDexie();

export default db;