import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pago {

    @PrimaryGeneratedColumn({ 
        type: 'int',
        name: 'Nro_tarjeta' })
    id: number

    @Column()
    Cod_Seguridad: number

    @Column()
    Fecha_Vto: Date

    @Column()
    Medio_Pago: string

}
