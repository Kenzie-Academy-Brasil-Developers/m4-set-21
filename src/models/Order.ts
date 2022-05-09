import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import OrderProduct from "./OrderProduct";

/* Models / Entities são a nossa descrição / 
representação da tabela no banco de dados */

/* Elas são utilizadas na camada do typescript, dentro da nossa API */

// GET /orders/id
/* 
  {
    desk: '20',
    products: [
      {
        product: {
          title: 'Hamburguer',
          price: 20.50
        }
      }
    ]
  }
 */

@Entity("orders")
class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    eager: true,
  })
  products: OrderProduct[];

  @Column()
  desk: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
