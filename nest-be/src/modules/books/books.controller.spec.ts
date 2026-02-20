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
      const result = [
        { isbn: '978-2-1622-7468-0', book_name: 'test', book_id: 1, description: 'test description' }, 
        { isbn: '978-2-0856-4757-8', book_name: 'test2', book_id: 2, description: 'test2 description' }
      ];
      jest.spyOn(BooksService.prototype, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
