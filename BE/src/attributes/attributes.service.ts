import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../../data.json');

@Injectable()
export class AttributesService {
  getAttributes() {
    if (data && !!data.length) {
      const attributes = Object.keys(data[0]);
      return attributes.filter((att) => att !== 'id');
    } else {
      return [{ message: 'No data available to get attributes' }];
    }
  }
}
