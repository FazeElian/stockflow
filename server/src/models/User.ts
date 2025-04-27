import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    Unique,
    AllowNull,
    HasMany
} from "sequelize-typescript";

// Models
import Category from "./Category";
import Product from "./Product";

@Table({
    tableName: "users"
})

class User extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(50)
    })
    declare userName: string

    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare email: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(60)
    })
    declare password: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare name: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare lastName: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(60)
    })
    declare profilePhoto: string

    @Column({
        type: DataType.STRING(6)
    })
    declare token: string

    @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    declare confirmed: boolean

    // Relationship with <Category[]>
    @HasMany(() => Category, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    declare categories: Category[]

    // Relationship with <Product[]>
    // @HasMany(() => Product, {
    //     onUpdate: "CASCADE",
    //     onDelete: "CASCADE"
    // })
    // declare products: Product[]
}

export default User;