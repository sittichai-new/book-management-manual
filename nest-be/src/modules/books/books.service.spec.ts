import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { PrismaService } from '../../prisma.service';

describe('BooksService', () => {
  let service: BooksService;
  let prisma: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService, PrismaService],
    }).compile();

    service = module.get<BooksService>(BooksService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = [{ name: 'test', bookId: 1 }, { name: 'test2', bookId: 2 }];
      jest.spyOn(BooksService.prototype, 'findAll').mockImplementation(() => Promise.resolve(result));

      expect(await service.findAll()).toBe(result);
    });
  });
});
