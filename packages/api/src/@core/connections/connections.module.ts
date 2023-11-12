import { Module } from '@nestjs/common';
import { CrmConnectionModule } from './crm/crm-connection.module';
import { ConnectionsController } from './connections.controller';

@Module({
  controllers: [ConnectionsController],
  imports: [CrmConnectionModule],
})
export class ConnectionsModule {}
