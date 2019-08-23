import { Column,Entity,JoinColumn,ManyToOne } from "typeorm";
import {PhoneExtensions} from "../phone_extensions/phone_extensions.entity";


@Entity("phone_dids",{schema:"public" } )
export class PhoneDids {

    @Column("int4",{ 
        nullable:false,
        primary:true,
        array:true,
        name:"did"
        })
    did:number[];
        

   
    @ManyToOne(type=>PhoneExtensions, phone_extensions=>phone_extensions.phoneDidss,{  })
    @JoinColumn({ name:'extension'})
    extension:PhoneExtensions | null;

}
