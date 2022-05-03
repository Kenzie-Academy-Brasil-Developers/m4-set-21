import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

/* Models / Entities são a nossa descrição / 
representação da tabela no banco de dados */

/* Elas são utilizadas na camada do typescript, dentro da nossa API */

@Entity("orders")
class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // 20
  // 08
  @Column()
  desk: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
