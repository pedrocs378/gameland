import { Expose } from "class-transformer"
import { Column } from "typeorm"

import { Cover } from "./Cover"
import { Platform } from "./Platform"

export class GameObject {

	@Column()
	id: number

	@Column(type => Cover)
	cover: Cover

	@Column(type => Platform)
	platforms: Platform[]

	@Expose({ name: 'cover_url' })
	getCoverUrl(): string {
		return `http://images.igdb.com/igdb/image/upload/t_cover_big_2x/${this.cover.image_id}.jpg`
	}
}