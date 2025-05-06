import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey,
    AllowNull,
    Unique
} from "sequelize-typescript";

// Models
import Category from "./Category";
import User from "./User";

@Table({
    tableName: "products"
})

class Product extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(150)
    })
    declare name: string

    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL
    })
    declare price: number

    @AllowNull(true)
    @Column({
        type: DataType.STRING
    })
    declare image: string

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    declare inflows: number

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0
    })
    declare outflows: number

    @Column({
        type: DataType.STRING,
        defaultValue: "Sin descripción"
    })
    declare description: string

    // Relationship with <Category>
    @BelongsTo(() => Category)
    declare category: Category

    @ForeignKey(() => Category)
    declare categoryId: number

    // Relationship with <User>
    @ForeignKey(() => User)
    declare userId : number

    @BelongsTo(() => User)
    declare user: User
}

export default Product;