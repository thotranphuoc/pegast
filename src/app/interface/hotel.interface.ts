export interface iHotel {
    Countries: iHotelCountry[],
    Groups: string[],
    HotelAttributes: iHotelAttribute[],
    HotelCategories: iHotelCategory[],
    Hotels: iHotelHotel[],
    Locations: iHotelLocation[],
    MealGroups: iHotelMealGroup[],
    Meals: iHotelMeal[],
    Regions: iHotelRegion[]
}
export interface iHotelCountry {
    ISO: string,
    Id: string,
    Name: string
    OptionalLanguageNames: string[]
    TimeZone: string,
    Groups: string
}

export interface iHotelAttribute {
    Id: string,
    ImageExists: boolean
    Name: string
}
export interface iHotelCategory {
    GroupId: string,
    Id: string,
    Name: string,
    OptionalLanguageNames: string,
    Rating: string,
}

export interface iHotelCategoryGroup {
    AverageHotelCategoryRating: string,
    Code: string,
    Id: string,
    Name: string
}
export interface iHotelHotel {
    Id: string,
    Name: string
}

export interface iHotelLocation {
    Code: string,
    Id: string,
    Name: string
    OptionalLanguageNames: string[]
    RegionId: string
}

export interface iHotelMealGroup {
    AverageHotelCategoryRating: string,
    Code: string,
    Id: string
    Name: string
}

export interface iHotelMeal {
    Code: string,
    GroupId: string,
    Id: string,
    Name: string,
    OptionalLanguageNames: string
    Rating: string
}

export interface iHotelRegion {
    CountryId: string,
    Id: string
    Name: string
    OptionalLanguageNames: string[]
    TimeZone: string
}
