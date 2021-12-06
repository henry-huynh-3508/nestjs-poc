import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthzModule } from './authz/authz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeOrm.config';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TasksModule,
    AuthzModule,
  ],
})
export class AppModule {}
