import { Column } from "typeorm"
import { Platform } from "./Platform"

export class GameObject {

	@Column()
	id: number

	@Column()
	cover_url: string

	@Column(type => Platform)
	platforms: Platform[]
}