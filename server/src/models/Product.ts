import {
    Table,
    Column,
    Model,
    DataType,
    BelongsTo,
    ForeignKey,
    AllowNull,
    Unique,
    Default
} from "sequelize-typescript";

// Models
import Category from "./Category";
import User from "./User";

@Table({
    tableName: "products"
})

class Product extends Model {
    // Name
    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(150)
    })
    declare name: string

    // Unique code
    @AllowNull(false)
    @Unique(true)
    @Column({
        type: DataType.STRING(30)
    })
    declare code: string

    // Selling Price
    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL
    })
    declare sellingPrice: number

    // Purchase Cost
    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL
    })
    declare purchaseCost: number

    // Initial stock
    @AllowNull(false)
    @Default(0)
    @Column({
        type: DataType.INTEGER
    })
    declare inflows: number

    // Outflows - every sale
    @Default(0)
    @Column({
        type: DataType.INTEGER,
    })
    declare outflows: number

    // Stock
    @Default(0)
    @Column({
        type: DataType.INTEGER,
    })
    declare stock: number

    // State of the product
    @AllowNull(false)
    @Default(true)
    @Column({
        type: DataType.BOOLEAN,
    })
    declare state: boolean;

    @Column({
        type: DataType.STRING,
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