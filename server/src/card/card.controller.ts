import { Get, Controller } from '@nestjs/common';

@Controller('cards')
export class CardController {
	@Get()
	root(): string {
    return 'Hello Cards!';
  }
}
