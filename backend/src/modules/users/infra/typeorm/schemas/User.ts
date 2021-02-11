import { Exclude } from 'class-transformer'
import { 
	Column, 
	CreateDateColumn, 
	Entity, 
	ObjectID, 
	ObjectIdColumn, 
	UpdateDateColumn 
} from 'typeorm'

@Entity('users')
class User {
	@ObjectIdColumn()
	id: ObjectID

	@Column({ nullable: false })
	name: string

	@Column({ nullable: false })
	last_name: string

	@Column({ nullable: false, unique: true })
	email: string

	@Column({ nullable: false })
	@Exclude()
	password: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}

export default User