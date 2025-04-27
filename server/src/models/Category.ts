import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    Unique,
    AllowNull,
    ForeignKey,
    BelongsTo,
    HasMany
} from "sequelize-typescript";

// Models
import User from "./User";
import Product from "./Product";

@Table({
    tableName: "categories"
})

class Category extends Model {
    @AllowNull(false)
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

    // Relationship with <Products[]>
    @HasMany(() => Product, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    declare products: Product[]

    // Relationship with <User>
    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user : User
}

export default Category;