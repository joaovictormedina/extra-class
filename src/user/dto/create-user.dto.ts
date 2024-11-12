import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone?: string;

  @Length(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos.' })
  cpf?: string;

  @IsOptional()
  @IsString()
  address?: string;
}
