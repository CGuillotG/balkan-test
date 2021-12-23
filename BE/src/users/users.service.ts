import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../../data.json');

@Injectable()
export class UsersService {
  getAllUsers() {
    return data
  }
  getFilteredUsers(queries) {
    let filteredData = [...data]
    Object.keys(queries).forEach(key=>{
      switch (key) {
        case "id":
        case "name":
          filteredData = filteredData.filter(fdata=> fdata[key].includes(queries[key]))
          break;
      }
    })
    return filteredData
  }
}