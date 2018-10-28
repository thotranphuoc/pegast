import { Injectable } from '@angular/core';
import { iHotelSearch } from './interface/pegas.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  ACCOUNT = {
    email: '',
    pass: '',
    isSigned: false
  }

  ACCOUNT_INIT = {
    email: '',
    pass: '',
    isSigned: false
  }

  HOTELSEARCH_DEFAULT: iHotelSearch = {
    REF: {
      Country: { Id: '', Name: '', ISO: '', TimeZone: '' },
      Currenty: [],
      HotelAttribute: [],
      HotelCategory: { GroupId: '', Id: '', Name: '', Rating: '' },
      Hotel: { AttributeIds: [], CategoryId: '', Id: '', LocationId: '', Name: '' },
      Location: { Id: '', Name: '', RegionId: '' },
      MealGroup: { Id: '', Name: '', Code: '' },
      Meal: [],
      Region: { CountryId: '', Id: '', Name: '', TimeZone: '' },
      RoomCategory: []
    },
    RESULTS: []
  }
}
