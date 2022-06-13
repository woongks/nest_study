import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password }); //user 엔티티 인스턴스를 생성
    return this.repo.save(user); // 해당 인스턴스를 db에 저장
  }
  async findOne(id: number) {
    return await this.repo.findOne({ where: { id } });
  }
  async find(email: string) {
    return await this.repo.find({ where: { email } });
  }
  async update(id: number, attrs: Partial<User>) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new Error('user not found');
    }
    Object.assign(user, attrs); //Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.
    return this.repo.save(user);
  }
  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new Error('user not found');
    }
    return this.repo.remove(user);
  }
}

// insert, update, delete method will not be affected by hooks (decorators in entity files)
