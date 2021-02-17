import { Column } from "typeorm";

export class Cover {

	@Column()
	id: number

	@Column()
	image_id: string

	@Column()
	url: string
}