import { Injectable } from "@nestjs/common";


@Injectable()
export class TshirtService{

    getTshirts(){
        return ["1","2","3"]
    }
}