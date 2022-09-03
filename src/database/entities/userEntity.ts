import {Entity, BaseEntity, PrimaryColumn, OneToMany, Column} from "typeorm";
import { ErrandsEntity } from "./errandsEntity";

@Entity({name: 'user'})
export default class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number

    @Column()
    name: string

    @Column()
    password: string

    @OneToMany(() => ErrandsEntity, errands => errands.userId)
    errands?: ErrandsEntity[]

    constructor(name: string, password: string) {
        super()
        this.name = name,
        this.password = password
    }
}
