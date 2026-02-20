import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from "../../prisma.service";
import { BooksModel } from '@/generated/prisma/models';

@Injectable()
export class BooksService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<BooksModel | null>{
    const findBook = await this.prisma.books.findFirst({
      where: {
        book_name: createBookDto.name,
        is_deleted: false,
      },
    });

    if (findBook) {
      throw new BadRequestException('Book with the same name already exists');
    }

    const book = await this.prisma.books.create({
    data: {
      book_name: createBookDto.name ?? '',
      description: createBookDto.description ?? '',
    },
    });

    return {
      book_name: book.book_name,
      description: book.description,
      is_deleted: book.is_deleted,
      book_id: book.book_id,
    };
  }

  async findAll() {
    const allBooks = await this.prisma.books.findMany({
      where: {
        is_deleted: false,
      },
    });
    return allBooks.map((book) => ({
      book_name: book.book_name,
      book_id: book.book_id,
    }));
  }

  async findOne(id: number) {
    const findBook = await this.prisma.books.findFirst({
      where: {
        book_id: id,
        is_deleted: false,
      },
    });

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }
    return {
      book_name: findBook.book_name,
      description: findBook.description,
      book_id: findBook.book_id,
    };
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const findBook = await this.prisma.books.findFirst({
      where: {
        book_id: id,
        is_deleted: false,
      },
    });

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }

      await this.prisma.books.update({
        where: {
          book_id: id,
        },
        data: {
          book_name: updateBookDto.name ?? findBook.book_name,
          description: updateBookDto.description ?? findBook.description,
          is_deleted: updateBookDto.isDeleted ?? findBook.is_deleted,
        },
      });
    
    return 'Updated successfully';
  }

  async remove(id: number) {
    const findBook = await this.prisma.books.findFirst({
      where: {
        book_id: id,
        is_deleted: false,
      },
    });

    if (!findBook) {
      throw new NotFoundException('Book not found');
    }

    await this.prisma.books.update({
      where: {
        book_id: id,
      },
      data: {
        is_deleted: true,
      },
    });

    return 'Deleted successfully';
  }
}
