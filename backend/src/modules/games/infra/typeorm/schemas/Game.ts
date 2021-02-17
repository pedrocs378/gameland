import { 
	Column, 
	CreateDateColumn, 
	Entity, 
	ObjectID, 
	ObjectIdColumn, 
	UpdateDateColumn 
} from 'typeorm'

import { GameObject } from './GameObject'

@Entity('games')
class Game {
	@ObjectIdColumn()
	id: ObjectID

	@Column({ nullable: false, unique: true })
	user_id: ObjectID

	@Column(type => GameObject)
	games: GameObject[]

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}

export default Game