import { Injectable, Logger } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Neo4jService } from 'nest-neo4j/dist';

@Injectable()
export class UsersService {
    constructor(
        private readonly neo4jService: Neo4jService
    ) {}

    async findOne(options?: object): Promise<any>{
        const res = await this.neo4jService.read('MATCH (u:USER{name:$name}) RETURN u AS user', {name:'tom'});

        return res.records[0].get('user');
    }

    async create(user: UserDto){
        const res = await this.neo4jService.write('CREATE (user:USER{name: $name, age: $age, mail: $mail, mdp: $mdp})', {name: user.username, age: '22', mail: user.email, mdp: user.password})

        return res;
    }

    async findByUsername(username: string){
        const res = await this.neo4jService.read('MATCH (u:USER{username:$name}) RETURN u AS user', {name: username });
        return res.records[0].get('user').properties;
    }

    async findByPayload(options?: object){
        //TODO Fill in Method
        return null;
    }

}
