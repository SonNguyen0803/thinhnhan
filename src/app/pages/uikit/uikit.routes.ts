import { Routes } from '@angular/router';
import { BeautySettingComponent } from './beauty-setting/beauty-setting.component';
import { BusinessHoursSettingComponent } from './business-hours-setting/business-hours-setting.component';
import { ShopSettingComponent } from './shop-setting/shop-setting.component';

export default [
    { path: 'dog', data: { breadcrumb: 'Beauty' }, component: BeautySettingComponent },
    { path: 'drink', data: { breadcrumb: 'Working Hours' }, component: BusinessHoursSettingComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
