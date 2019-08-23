import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {PhoneGroups} from "../phone_groups/phone_groups.entity";
import {PhoneDids} from "../phone_dids/phone_dids.entity";


@Entity("phone_extensions",{schema:"public" } )
export class PhoneExtensions {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        name:"extension"
        })
    extension:string;
        

    @Column("character varying",{ 
        nullable:true,
        name:"password"
        })
    password:string | null;
        

   
    @ManyToOne(type=>PhoneGroups, phone_groups=>phone_groups.phoneExtensionss,{  })
    @JoinColumn({ name:'phone_group_id'})
    phoneGroup:PhoneGroups | null;


   
    @OneToMany(type=>PhoneDids, phone_dids=>phone_dids.extension)
    phoneDidss:PhoneDids[];
    
}
