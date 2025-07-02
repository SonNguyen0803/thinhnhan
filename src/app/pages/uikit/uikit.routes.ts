import { Routes } from '@angular/router';
import { DogMeatComponent } from './dog-meat/dog-meat.component';
import { DessertComponent } from './dessert/dessert.component';
import { DrinkComponent } from './drink/drink.component';

export default [
    { path: 'dog', data: { breadcrumb: 'Thịt chó' }, component: DogMeatComponent },
    { path: 'dessert', data: { breadcrumb: 'Tráng miệng' }, component: DessertComponent },
    { path: 'drink', data: { breadcrumb: 'Giải khát' }, component: DrinkComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
