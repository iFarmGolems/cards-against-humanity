import { Module } from "@nestjs/common";
import { CardController } from "./card.controller";

@Module({
  imports: [],
  controllers: [CardController],
  components: [],
})
export class CardModule {}
