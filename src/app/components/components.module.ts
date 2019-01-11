
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HotdealSliderComponent } from './hotdeal-slider/hotdeal-slider.component';

@NgModule({
    declarations: [
        HotdealSliderComponent,
    ],
    imports: [IonicModule],
    exports: [
        HotdealSliderComponent,
    ]
})
export class CustomComponentsModule { }
