import { Column } from "typeorm";

export class Platform {

	@Column()
	id: number

	@Column()
	name: string

	@Column()
	abbreviation: string
}