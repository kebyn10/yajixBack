import { Controller, Get } from "@nestjs/common";
import { TshirtService } from "./Tshirt.service";


@Controller('/app')
export class TshirtsController{
    constructor(private tshirtService:TshirtService){}

    @Get("/Tshirts")
    getAllTshirts(){
        return this.tshirtService.getTshirts()
    }
    //@UsePipes(new ValidatorPipe())
    // @Get("/Tshirts")
    // getAllTshirts():string{
    //     return this.tshirtService.getTshirts()
    //
    // }

}