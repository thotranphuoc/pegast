import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { iHotelSearch, iProfile, iBOOKING } from './interface/pegas.interface';
import { LocalService } from './local.service';
@Injectable({
    providedIn: 'root'
})
export class PegasService {
    WEBSERVICE_URL = 'https://cluboto.net/webservice/service_post.php';

    constructor(
        private httpClient: HttpClient,
        private localService: LocalService
    ) {

    }

    getHotdeal() {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/service.php?act=hotdeal&checkin=&checkout=&budgetfrom=&budgetto=&fromlocation=&tolocation="
        return this.httpClient.get(URL)
        // .subscribe(data=>{
        //     console.log(data);
        // })
    }

    getDealInfo(ID: string) {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/service.php?act=hotdeal&id=" + ID;
        return this.httpClient.get(URL);
    }

    getLocations() {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/service.php?act=location&keyword=";
        return this.httpClient.get(URL);
    }

    getLocation(ID: string) {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/service.php?act=location&id=" + ID;
        return this.httpClient.get(URL);
    }

    getRestaurants() {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/service.php?act=restaurant";
        return this.httpClient.get(URL);
    }

    getRestaurant(ID: string) {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/service.php?act=restaurant&id=" + ID;
        return this.httpClient.get(URL);
    }

    // Return a list of countries
    hotelSearchOptions() {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=HotelSearchOptions";
        return this.httpClient.get(URL);
    }

    //Return list of HotelSearchHotelOption (list of hotel)
    hotelSearchOptionsHotel() {
        let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=HotelSearchOptionsHotel"
        return this.httpClient.get(URL);
    }

    //return: HotelSearchResultItem - list of Room ...
    // hotelSearch() {
    //     let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=HotelSearch";
    //     return this.httpClient.get(URL)
    //     //   .pipe(map(data => {
    //     //     // let res = data[0].HotelSearchResponse.Result.SearchResultItems;
    //     //     // let re = data[0].HotelSearchResponse.Result.ReferenceDescription;
    //     //     // return data
    //     //     data[0].HotelSearchResponse.Result.SearchResultItems;
    //     //   }))
    // }

    //return: HotelSearchResultItem - list of Room ...
    hotelSearch() {
        return new Promise((resolve, reject) => {
            let SEARCH: iHotelSearch = this.localService.HOTELSEARCH_DEFAULT;
            let URL = "http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=HotelSearch";
            this.httpClient.get(URL).toPromise()
                .then((res: any) => {
                    let ref = res[0].HotelSearchResponse.Result.ReferenceDescription;
                    let results = res[0].HotelSearchResponse.Result.SearchResultItems.HotelSearchResultItem;
                    console.log(ref);
                    SEARCH.REF.Country = ref.Countries.Country;
                    SEARCH.REF.Currenty = ref.Currencies.Currency
                    SEARCH.REF.Hotel = ref.Hotels.Hotel;
                    SEARCH.REF.HotelAttribute = ref.HotelAttributes.HotelAttribute;
                    SEARCH.REF.HotelCategory = ref.HotelCategories.HotelCategory;
                    SEARCH.REF.Location = ref.Locations.Location;
                    SEARCH.REF.Meal = ref.Meals.Meal;
                    SEARCH.REF.MealGroup = ref.MealGroups.MealGroup;
                    SEARCH.REF.Region = ref.Regions.Region;
                    SEARCH.REF.RoomCategory = ref.RoomCategories.RoomCategory;
                    SEARCH.RESULTS = results;
                    SEARCH.RESULTS.forEach(RESULT => {
                        RESULT['Hotel'] = SEARCH.REF.Hotel.Name;
                        RESULT['Meal'] = SEARCH.REF.Meal.filter(ITEM => ITEM.Id === RESULT.MealId)[0];
                        RESULT['PaymentCurrency'] = SEARCH.REF.Currenty.filter(ITEM => ITEM.Id === RESULT.PaymentCurrencyId)[0];
                        RESULT['PriceCurrency'] = SEARCH.REF.Currenty.filter(ITEM => ITEM.Id === RESULT.PriceCurrencyId)[0];
                        RESULT['Room'] = SEARCH.REF.RoomCategory.filter(ITEM => ITEM.Id === RESULT.RoomCategoryId)[0];
                    })
                    resolve({ SEARCH: SEARCH, MSG: 'Success' })
                })
                .catch(err => reject(err))
        })
    }

    hotelDirectionOptionsGet() {
        return new Promise((resolve, reject) => {
            let url = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearchOptions.php';
            let DIRECTIONS = [];
            this.getResponseFromUrl(url).toPromise()
                .then((data: any) => {
                    console.log(data);
                    let REF = data.ReferenceDescription;
                    DIRECTIONS = data.SearchOptions.Directions.PackageSearchDirectionOption;
                    DIRECTIONS.forEach(DIR => {
                        DIR['DepartureLocation'] = REF.Locations.Location.filter(item => item.Id === DIR.DepartureLocationId)[0];
                        DIR['DestinationCountry'] = REF.Countries.Country.filter(item => item.Id === DIR.DestinationCountryId)[0];
                        DIR['ReturnLocationId'] = REF.Locations.Location.filter(item => item.Id === DIR.ReturnLocationId)[0];
                    })
                    resolve({ DIRECTIONS: DIRECTIONS, RESULT: 'Success' })
                })
                .catch(err => reject(err));
        })
    }

    packagesSearch() {
        return new Promise((resolve, reject) => {
            let url = 'http://pegas-smart-app.enablecode.com.vn/pegas/PackageSearch.php';
            this.httpClient.get(url).toPromise()
                .then((data) => {
                    console.log(data);
                    resolve(data);
                })
                .catch(err => reject(err))
        })
    }



    getResponseFromUrl(URL: string) {

        return this.httpClient.get(URL);
    }

    addHotelService(URL) {
        let URLa = "http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=AddHotelService&AdultMinAge=0&AgencyContractId=5724036&AgencyFeeAgencyBonus=0&AgencyFeeAgencyBonusPercent=0&AgencyFeeAgencyEmployeeBonus=0&AgencyFeeAgencyEmployeeBonusPercent=0&AgencyFeeCommission=0&AgencyFeeCommissionPercent=0.11&AgencyFeeDiscount=0&AgencyFeeDiscountPercent=0&AgencyFeeParentAgencyBonus=0&AgencyFeeParentAgencyBonusPercent=0&AgencyFeePercent=0.11&AgencyUserId=5566685&BookingCurrencyId=37&DefaultPaymentCurrencyId=37&EndDate=0001-01-01T00:00:00&MarketId=12487&PackageId=6045709&Address=Moscow"
        return this.httpClient.get(URLa);
    }

    getVoucher() {
        let URL = 'http://pegas-smart-app.enablecode.com.vn/webservice/soap_service.php?act=GetHotelVoucher';
        return this.httpClient.get(URL)
    }

    getResultFromURL(url: string) {
        return this.httpClient.get(url);
    }

    registerPegas() {
        let headers = new HttpHeaders({
            'Content-Type': 'text/html; charset=UTF-8',
            'Response-Type': 'json'
        });
        // headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8')
        // headers.append('Access-Control-Allow-Headers','Content-Type,Authorization,Upgrade-Insecure-Requests')
        // headers.append(‘Accept’, ‘/’);
        // headers.append(“Access-Control-Allow-Credentials”, “true”);
        // headers.append(‘Upgrade-Insecure-Requests’,‘1’);
        // headers.append(‘withCredentials’,‘true’);
        // headers.append(“Access-Control-Allow-Origin”,“http://localhost:8100 39”);
        // headers.append(“Access-Control-Allow-Credentials”, “true”);
        // headers.append(“Access-Control-Allow-Methods”, “GET, POST, PUT, DELETE, OPTIONS”);
        // headers.append(“Access-Control-Allow-Headers”, “Content-Type,Authorization,Upgrade-Insecure-Requests”);
        const httpOptions = {
            headers: headers
        };
        const url = this.WEBSERVICE_URL;;
        // const body = { act: "shop", id: 0}
        let body = new HttpParams().set('act', 'shop');    // now it has aaa
        body = body.set('id', '9');
        this.httpClient.post(url, body).toPromise().then((res) => {
            console.log(res);
        }).catch(err => console.log(err))
        // .subscribe((data) => {
        //     console.log(data);
        // })

    }

    shopsGetWithPostMethod() {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'shop',
                id: '0'
            }
        });
        return this.httpClient.post(url, body)
    }

    shopDetailGetWithPostMethod(shopID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'shop',
                id: shopID
            }
        });
        return this.httpClient.post(url, body)
    }

    hotDealsGetWithPostMethod() {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'hotdeal',
                id: '0'
            }
        })
        return this.httpClient.post(url, body)
    }

    hotDealDetailGetWithPostMethod(ID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'hotdeal',
                id: ID
            }
        })
        return this.httpClient.post(url, body)
    }

    newsSpecialsGetWithPostMethod() {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'news_special',
                id: '0'
            }
        })
        return this.httpClient.post(url, body)
    }

    newsSpecialDetailGetWithPostMethod(ID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'news_special',
                id: ID
            }
        })
        return this.httpClient.post(url, body)
    }

    locationsGetWithPostMethod() {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'location',
                id: '0'
            }
        })
        return this.httpClient.post(url, body)
    }

    locationDetailGetWithPostMethod(ID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'location',
                id: ID
            }
        })
        return this.httpClient.post(url, body)
    }

    voucherWalletsGetWithPostMethod(UserID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'voucher_wallet',
                user_id: UserID
            }
        })
        return this.httpClient.post(url, body)
    }

    // voucherWalletDetailGetWithPostMethod(ID: string){
    //     let url = this.WEBSERVICE_URL;
    //     let body = new HttpParams({
    //         fromObject: {
    //             act: 'voucher_wallet',
    //             id: ID
    //         }
    //     })
    //     return this.httpClient.post(url, body)
    // }

    restaurantsGetWithPostMethod() {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'restaurant',
                id: '0'
            }
        })
        return this.httpClient.post(url, body)
    }

    restaurantDetailGetWithPostMethod(ID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'restaurant',
                id: ID
            }
        })
        return this.httpClient.post(url, body)
    }

    drinksGetWithPostMethod() {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'drink',
                id: '0'
            }
        })
        return this.httpClient.post(url, body)
    }

    drinkDetailGetWithPostMethod(ID: string) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'drink',
                id: ID
            }
        })
        return this.httpClient.post(url, body)
    }



    accountRegistration1(
        firstname: string,
        lastname: string,
        email: string,
        gender: string,
        password: string,
        passport_number: string,
        profile_picture?: string,
        address_vn?: string,
        address_en?: string,
        passport_validity?: string,
        nationality_vn?: string,
        nationality_en?: string,
        phone_number?: string,
    ) {
        let url = this.WEBSERVICE_URL;
        let body = new HttpParams({
            fromObject: {
                act: 'registeration',
                firstname: firstname,
                lastname: lastname,
                email: email,
                gender: gender,
                password: password,
                passport_number: passport_number,
                profile_picture: profile_picture ? profile_picture : '',
                address_vn: address_vn ? address_vn : '',
                address_en: address_en ? address_en : '',
                passport_validity: passport_validity ? passport_validity : '',
                nationality_vn: nationality_vn ? nationality_vn : '',
                nationality_en: nationality_en ? nationality_en : '',
                phone_number: phone_number ? phone_number : '',
            }
        });
        console.log(body)
        return this.httpClient.post(url, body)
    }

    accountRegister(email: string, password: string) {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'register',
                email: email,
                password: password
            }
        })
        return this.httpClient.post(url, body)
    }

    accountLogin(email: string, password: string) {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'login',
                email: email,
                password: password
            }
        })
        return this.httpClient.post(url, body)
    }

    profileGet(userID: string) {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'get_profile_user',
                id: userID
            }
        })
        return this.httpClient.post(url, body)
    }

    profileUpdate(PROFILE) {
        let url = this.WEBSERVICE_URL;;
        let object: any = PROFILE;
        object['act'] = 'edit_profile_user';
        // let ID = object.ID;
        // delete object.ID;
        // object['id'] = ID;
        let body = new HttpParams({
            fromObject: object
        })
        console.log(object);
        return this.httpClient.post(url, body)
    }

    policyGet() {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'booking_policy',
            }
        })
        return this.httpClient.post(url, body)
    }

    voucherWalletGet() {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'voucher_wallet',
            }
        })
        return this.httpClient.post(url, body)
    }

    destinationGuideGet(userID: string) {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'destination_guide',
                user_id: userID
            }
        })
        return this.httpClient.post(url, body)
    }

    itineraryGet(userID: string, IteneraryID: string) {
        let url = this.WEBSERVICE_URL;;
        let body = new HttpParams({
            fromObject: {
                act: 'itinerary',
                user_id: userID,
                id: IteneraryID
            }
        })
        return this.httpClient.post(url, body)
    }


    hotDealBookingMake(BOOKING: iBOOKING) {
        console.log(BOOKING);
        let body = new HttpParams({
            fromObject: {
                act: 'bookings',
                booking_id: BOOKING.booking_id,
                package_id: BOOKING.package_id,
                user_id: BOOKING.user_id,
                date_start: BOOKING.date_start,
                date_end: BOOKING.date_end,
                guestno: BOOKING.guestno,
                booking_state: 'BOOKED',
            }
        })
        return this.httpClient.post(this.WEBSERVICE_URL, body)
    }

    travelJournalsUserGet(USER_ID) {
        let body = new HttpParams({
            fromObject: {
                act: 'travel_journal',
                id: USER_ID,
            }
        })
        return this.httpClient.post(this.WEBSERVICE_URL, body)
    }

    flightTicketGet(USER_ID: string, ID: string){
        let body = new HttpParams({
            fromObject: {
                act: 'flight_ticket',
                id: ID,
                user_id: USER_ID
            }
        })
        return this.httpClient.post(this.WEBSERVICE_URL, body)
    }

    flightTicketsGet(USER_ID: string){
        let body = new HttpParams({
            fromObject: {
                act: 'flight_ticket',
                user_id: USER_ID,
            }
        })
        return this.httpClient.post(this.WEBSERVICE_URL, body)
    }

    hotelVoucherGet(USER_ID: string, ID: string){
        let body = new HttpParams({
            fromObject: {
                act: 'hotel_voucher',
                user_id: USER_ID,
                id: ID
            }
        })
        return this.httpClient.post(this.WEBSERVICE_URL, body)
    }

    insuranceGet(USER_ID: string, ID: string){
        let body = new HttpParams({
            fromObject: {
                act: 'insurance',
                user_id: USER_ID,
                id: ID
            }
        })
        return this.httpClient.post(this.WEBSERVICE_URL, body)
    }


}
