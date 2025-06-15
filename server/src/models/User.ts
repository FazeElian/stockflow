import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    Unique,
    AllowNull
} from "sequelize-typescript";

@Table({
    tableName: "users"
})

class User extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(60)
    })
    declare userName: string

    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(100)
    })
    declare email: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(60)
    })
    declare password: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(80)
    })
    declare names: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(80)
    })
    declare lastNames: string

    @Column({
        type: DataType.STRING(6)
    })
    declare code: string

    @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    declare confirmed: boolean
}

export default User;