import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import Order from "./Order";
import Product from "./Product";

@Entity("order_products")
class OrderProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // produto 1,4,5,6
  // pedido 5 - mesa 20

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @Column()
  productId: string;

  @Column()
  orderId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrderProduct;
