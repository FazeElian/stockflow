import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    AllowNull,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

// Models
import User from "./User";

@Table({
    tableName: "customers"
})

class Customer extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(50)
    })
    declare name: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(100),
        defaultValue: "Sin descripción"
    })
    declare description: string

    // Relationship with <User>
    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user : User
}

export default Customer;