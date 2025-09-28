import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';


@Module({
    imports: [PrismaModule],
    controllers: [ModulesController],
    providers: [ModulesService]
})
export class ModulesModule {}
