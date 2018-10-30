import { Injectable } from '@angular/core';
import { iHotelSearch, iProfile } from './interface/pegas.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  
  PROFILE: iProfile = {
    ID: "",
    address_en: "",
    address_vn: "",
    dob: "",
    email: "",
    firstname: "",
    gender: '',
    lastname: "",
    nationality_en: "",
    nationality_vn: "",
    passport_number: "",
    passport_validity: "",
    phone: "",
    profile_picture: ""
  }

  PROFILE_DEFAULT: iProfile = {
    ID: "",
    address_en: "",
    address_vn: "",
    dob: "",
    email: "",
    firstname: "",
    gender: '',
    lastname: "",
    nationality_en: "",
    nationality_vn: "",
    passport_number: "",
    passport_validity: "",
    phone: "",
    profile_picture: ""
  }
  ACCOUNT = {
    email: '',
    pass: '',
    isSigned: false,
    id: '',
    profile: this.PROFILE_DEFAULT
  }

  ACCOUNT_INIT = {
    email: '',
    pass: '',
    isSigned: false,
    id: '',
    profile: this.PROFILE_DEFAULT
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
