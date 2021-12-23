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
        case "happy":
        case "healthy":
        case "busy":
          filteredData = filteredData.filter(fdata=> fdata[key] === JSON.parse(queries[key]))
          break;
        case "age-gte":
          filteredData = filteredData.filter(fdata=> fdata.age >= queries[key] )
          break;
        case "age-lte":
          filteredData = filteredData.filter(fdata=> fdata.age <= queries[key] )
          break;
      }
    })
    return filteredData
  }
}