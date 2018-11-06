export interface iPKG {
    P_ID: string,
    P_DATE: string,
    P_TIME: string,
    P_NAME: string,
    P_DEST: string,
    P_DEPT: string,
    P_FROM: string,
    P_TO: string,
    P_CARRIERS: string[],
    P_PRICE: string,
    P_HOTEL: iHotel,
    P_DISCOUNT: boolean,
    P_ARR_ON_NEXT_DAY: boolean,
    P_ROOM: string,
    P_MEAL: string,
    P_IMG: string
}

export interface iHotel {
    H_ID: string,
    H_NAME: string,
    H_STAR: string,
    H_LOCATION: string,
    H_CITY: string,
    H_ROOMS: iRoom[]
}

export interface iRoom {
    R_ID: string,
    R_TYPE: string,
    R_MEAL: string,
    R_ACCOMODATION: string,
    R_PRICE: string,
    R_CURRENCY: string
}

export interface iDeal {
    id: string,
    feature_img: string,
    title_en: string,
    title_vn: string
}

export interface iDealInfo {
    content_en: string,
    content_vn: string,
    feature_img: string,
    title_en: string,
    title_vn: string
}

export interface iPegasLoc {
    feature_img: string,
    id: string,
    title_en: string,
    title_vn: string
}

export interface iLocationInfo {
    content_en: string,
    content_vn: string,
    feature_img: string,
    title_en: string,
    title_vn: string
}

export interface iRestaurant {
    address_en: string,
    address_vn: string,
    feature_img: string,
    name_en: string,
    name_vn: string,
    id: string
}

export interface iRestInfo {
    address_en: string,
    address_vn: string,
    album: string[],
    contactno_en: string,
    contactno_vn: string,
    featured_img: string,
    name_en: string,
    name_vn: string,
    rating: string,
    website: string
}

export interface iHotelSearch {
    REF: {
        Country: { Id: string, Name: string, ISO: string, TimeZone: string },
        Currenty: { Id: string, Name: string, Code: string, Symbol: string }[],
        HotelAttribute: { Id: string, Name: string, Code: string }[],
        HotelCategory: { GroupId: string, Id: string, Name: string, Rating: string }
        Hotel: { AttributeIds: string[], CategoryId: string, Id: string, LocationId: string, Name: string },
        Location: { Id: string, Name: string, RegionId: string },
        MealGroup: { Id: string, Name: string, Code: string },
        Meal: { Id: string, Name: string, Code: string, GroupId: string, Rating: string }[],
        Region: { CountryId: string, Id: string, Name: string, TimeZone: string },
        RoomCategory: { Id: string, Name: string, Code: any }[]
    },
    RESULTS: {
        Accomodations: { Adults: string, ChildAges: any }[],
        AvailabilityStatus: string,
        HotelEarlyBookingReductionsMinExpirationDate: any,
        HotelId: string,
        HotelSpoMinExpirationDate: any,
        ID: string,
        MandatorySupplements: any,
        MealId: string,
        PaymentCurrencyId: string,
        PaymentCurrencyPrice: string,
        Price: string,
        PriceCurrencyId: string,
        RoomCategoryId: string
    }[]
}


export interface iProfile {
    ID: string,
    address_en: string,
    address_vn: string,
    dob: string,
    email: string,
    firstname: string,
    gender: string,
    lastname: string,
    nationality_en: string,
    nationality_vn: string,
    passport_number: string,
    passport_validity: string,
    phone: string,
    profile_picture: string,
}

export interface iBOOKING {
    booking_id: string,
    package_id: string,
    user_id: string,
    date_start: string,
    date_end: string,
    guestno: string,
    booking_state: string,
}
