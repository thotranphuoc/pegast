import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'hot-deals', loadChildren: './hot-deals/hot-deals.module#HotDealsPageModule' },
  { path: 'hotdeals', loadChildren: './hotdeals/hotdeals.module#HotdealsPageModule' },
  { path: 'hotels', loadChildren: './hotels/hotels.module#HotelsPageModule' },
  { path: 'packages', loadChildren: './packages/packages.module#PackagesPageModule' },
  { path: 'Flights', loadChildren: './flights/flights.module#FlightsPageModule' },
  { path: 'reservation', loadChildren: './reservation/reservation.module#ReservationPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'my-trip', loadChildren: './my-trip/my-trip.module#MyTripPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'location/:id', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'travel-journal', loadChildren: './travel-journal/travel-journal.module#TravelJournalPageModule' },
  // { path: 'news-special', loadChildren: './news-special/news-special.module#NewsSpecialPageModule' },
  { path: 'language', loadChildren: './language/language.module#LanguagePageModule' },
  { path: 'booking-policy', loadChildren: './booking-policy/booking-policy.module#BookingPolicyPageModule' },
  // { path: 'hotdeal/:id', loadChildren: './hotdeal/hotdeal.module#HotdealPageModule' },
  { path: 'deal/:id', loadChildren: './deal/deal.module#DealPageModule' },
  { path: 'deal-detail-view', loadChildren: './deal-detail-view/deal-detail-view.module#DealDetailViewPageModule' },
  { path: 'rxjs', loadChildren: './rxjs/rxjs.module#RxjsPageModule' },
  { path: 'hotels-search', loadChildren: './hotels-search/hotels-search.module#HotelsSearchPageModule' },
  { path: 'flight-hotel', loadChildren: './flight-hotel/flight-hotel.module#FlightHotelPageModule' },
  { path: 'locations', loadChildren: './locations/locations.module#LocationsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'voucher-wallet', loadChildren: './voucher-wallet/voucher-wallet.module#VoucherWalletPageModule' },
  { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' },
  { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantPageModule' },
  { path: 'destination-guides', loadChildren: './destination-guides/destination-guides.module#DestinationGuidesPageModule' },
  { path: 'itinerary', loadChildren: './itinerary/itinerary.module#ItineraryPageModule' },
  { path: 'premium-seat-allocation', loadChildren: './premium-seat-allocation/premium-seat-allocation.module#PremiumSeatAllocationPageModule' },
  { path: 'local-map', loadChildren: './local-map/local-map.module#LocalMapPageModule' },
  { path: 'insurance-document', loadChildren: './insurance-document/insurance-document.module#InsuranceDocumentPageModule' },
  { path: 'flight-eticket', loadChildren: './flight-eticket/flight-eticket.module#FlightEticketPageModule' },
  { path: 'hotel-voucher', loadChildren: './hotel-voucher/hotel-voucher.module#HotelVoucherPageModule' },
  { path: 'news-special-detail', loadChildren: './news-special-detail/news-special-detail.module#NewsSpecialDetailPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'drinks', loadChildren: './drinks/drinks.module#DrinksPageModule' },
  { path: 'shops', loadChildren: './shops/shops.module#ShopsPageModule' },
  { path: 'shop', loadChildren: './shop/shop.module#ShopPageModule' },
  { path: 'drink', loadChildren: './drink/drink.module#DrinkPageModule' },
  { path: 'hotdeal-fullfill', loadChildren: './hotdeal-fullfill/hotdeal-fullfill.module#HotdealFullfillPageModule' },
  { path: 'search-destination', loadChildren: './search-destination/search-destination.module#SearchDestinationPageModule' },
  { path: 'search-date', loadChildren: './search-date/search-date.module#SearchDatePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'dealbook/:id', loadChildren: './dealbook/dealbook.module#DealbookPageModule' },
  { path: 'packages-of-direction', loadChildren: './packages-of-direction/packages-of-direction.module#PackagesOfDirectionPageModule' },
  { path: 'packagesx', loadChildren: './packagesx/packagesx.module#PackagesxPageModule' },
  { path: 'package-book', loadChildren: './package-book/package-book.module#PackageBookPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '*/*', redirectTo: 'home', pathMatch: 'full' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
