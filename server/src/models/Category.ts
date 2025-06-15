import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    AllowNull,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";

// Models
import User from "./User";
import Product from "./Product";

@Table({
    tableName: "categories"
})

class Category extends Model {
    // Name
    @AllowNull(false)
    @Column({
        type: DataType.STRING(50)
    })
    declare name: string

    // Icon
    @AllowNull(true)
    @Default("BoxIcon")
    @Column({
        type: DataType.STRING
    })
    declare icon: string

    // Color
    @AllowNull(true)
    @Default("Blue")
    @Column({
        type: DataType.STRING
    })
    declare color: string

    // Description
    @AllowNull(true)
    @Default("")
    @Column({
        type: DataType.STRING(255)
    })
    declare description: string

    // Relationship with <Products[]>
    @HasMany(()=> Product, {
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    declare products:  Product[]

    // Relationship with <User>
    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user : User
}

export default Category;