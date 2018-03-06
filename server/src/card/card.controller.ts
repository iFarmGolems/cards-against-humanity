import { Get, Controller } from '@nestjs/common';

@Controller()
export class CardController {
	@Get()
	root(): string {
    return 'Hello World!';
  }
}
