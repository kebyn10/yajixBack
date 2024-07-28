import { IsNumber, IsString } from "class-validator"

export class CreateTshirt{
    @IsString()
    title:string
    @IsNumber()
    price:number
}