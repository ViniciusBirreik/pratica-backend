import {Entity, PrimaryColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm";
import UserEntity from "./user";

@Entity({name: 'errands'})
export class ErrandsEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number
    
    @Column()
    description: string

    @Column()
    details: string

    @Column({name: 'user_id'})
    userId: number

    @ManyToOne(() => UserEntity, user => user.errands)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user?: UserEntity

    constructor(description: string, details: string, userId: number) {
        super()

        this.description = description
        this.details = details
        this.userId = userId
    }
}
