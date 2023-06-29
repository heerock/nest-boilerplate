import { UserEntity } from 'src/users/users.entity'
import { CommonEntity } from '../common/entities/common.entity' // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity, OneToOne } from 'typeorm'

@Entity({
  name: 'USER_PROFILE',
})
export class ProfileEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: true })
  bio: string

  @Column({ type: 'varchar', nullable: true })
  site: string

  // 양방향일 때 사용
  // @OneToOne(() => UserEntity)
  // user: UserEntity
}

// 양방향일 때 선언해야 함.
// const profile = new ProfileEntity()
