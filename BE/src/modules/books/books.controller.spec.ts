import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { PrismaService } from "../../prisma.service";

describe('BooksController', () => {
  let controller: BooksController;
  let prisma: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService, PrismaService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = [{ name: 'test', bookId: 1 }, { name: 'test2', bookId: 2 }];
      jest.spyOn(BooksService.prototype, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
