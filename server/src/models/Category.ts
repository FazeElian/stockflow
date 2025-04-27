import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    Unique,
    AllowNull,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";

// User model
import User from "./User";

@Table({
    tableName: "categories"
})

class Category extends Model {
    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(50)
    })
    declare name: string

    @AllowNull(true)
    @Default("Sin descripción")
    @Column({
        type: DataType.STRING(100)
    })
    declare description: string

    // Relationship with <User>
    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user : User
}

export default Category;