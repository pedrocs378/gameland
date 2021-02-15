import { 
	Column, 
	CreateDateColumn, 
	Entity, 
	ObjectID, 
	ObjectIdColumn, 
	UpdateDateColumn 
} from 'typeorm'

interface Platform {
	
}

class Game {
	@ObjectIdColumn()
	id: ObjectID

	@Column()
	game_id: number

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}

export default Game