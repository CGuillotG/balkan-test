import { Controller, Get, Dependencies } from '@nestjs/common';
import { AttributesService } from './attributes.service';

@Controller('attributes')
@Dependencies(AttributesService)
export class AttributesController {
    constructor(attributesService) {
        this.attributesService = attributesService
    }

    @Get()
    getAttributes() {
        return this.attributesService.getAttributes();
    }
}
