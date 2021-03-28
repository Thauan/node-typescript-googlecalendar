import { Model, AllowNull, Column, NotEmpty, PrimaryKey, Table, Unique, Default, IsUUID, DataType } from 'sequelize-typescript'

export interface UserInterface {
    id?: string
    name: string
    lastname: string
    email: string
    password: string
    vip?: boolean
}

@Table({
  tableName: 'user',
  timestamps: true
})

export default class User extends Model implements UserInterface {
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
    lastname!: string

    @AllowNull(false)
    @NotEmpty
    @Unique
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string

    @AllowNull(false)
    @Default(false)
    @Column
    vip?: boolean
}
