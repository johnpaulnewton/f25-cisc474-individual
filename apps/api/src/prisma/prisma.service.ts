import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../packages/database/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    onModuleInit() {
        this.$connect()
            .then(() => console.log('Connected to DB'))
            .catch((err) => {
                console.log(err);
            });
    }
    
    async onModuleDestroy() {
        await this.$disconnect();
      }
}
