import { Model, AllowNull, Column, NotEmpty, PrimaryKey, Table, IsUUID, DataType } from 'sequelize-typescript'

export interface BrandsInterface {
    id?: string
    name: string
    brief: string
    webAddress: string
    active: boolean
}

@Table({
  tableName: 'brands',
  timestamps: true
})

export default class Brands extends Model implements BrandsInterface {
    @AllowNull(false)
    @IsUUID(4)
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id?: string

    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    brief!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    webAddress!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    active!: boolean
}
