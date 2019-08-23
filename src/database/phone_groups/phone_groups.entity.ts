import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {PhoneExtensions} from "../phone_extensions/phone_extensions.entity";


@Entity("phone_groups",{schema:"public" } )
export class PhoneGroups {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:true,
        name:"name"
        })
    name:string | null;
        

   
    @OneToMany(type=>PhoneExtensions, phone_extensions=>phone_extensions.phoneGroup)
    phoneExtensionss:PhoneExtensions[];
    
}
