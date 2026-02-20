import { IsString, IsNotEmpty, IsISBN } from 'class-validator';

export class CreateBookDto {


    @IsISBN()
    isbn?: string;

    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsString()
    description?: string;
}
