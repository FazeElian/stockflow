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
        type: DataType.STRING(100)
    })
    declare name: string

    // Unique code
    @AllowNull(true)
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
    @AllowNull(true)
    @Column({
        type: DataType.DECIMAL
    })
    declare purchaseCost: number

    // Initial stock
    @AllowNull(false)
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

    // Minimum Stock quantity
    @Default(1)
    @AllowNull(true)
    @Column({
        type: DataType.INTEGER,
    })
    declare minimumStock: number

    // Product status
    @AllowNull(false)
    @Default("ACTIVE")
    @Column({
        type: DataType.ENUM("ACTIVE", "OUT", "DISCONTINUED"),
    })
    declare status: string;

    @Column({
        type: DataType.STRING(200),
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