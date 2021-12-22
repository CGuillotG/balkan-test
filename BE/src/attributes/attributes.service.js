import { Injectable } from '@nestjs/common';
import data from '../../../data.json'

@Injectable()
export class AttributesService {
    getAttributes() {
        if (!!data.length) {
            return Object.keys(data[0])
        } else {
            return {message: "No data available to get it's attributes"}
        }
    }
}
