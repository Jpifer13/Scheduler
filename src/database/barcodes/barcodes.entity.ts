import { Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Barcodes {

    @PrimaryColumn("character varying",{ 
        nullable:false,
        primary:true,
        name:"barcode"
        })
    barcode:string;
        

    @PrimaryColumn("character varying",{ 
        nullable:false,
        primary:true,
        name:"stencil"
        })
    stencil:string;
        
}
