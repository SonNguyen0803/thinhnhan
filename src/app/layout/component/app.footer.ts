import { Component } from '@angular/core';
import { MapComponent } from "./map/map.component";

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `
    <div class="p-4 card gap-4 bg-gray-100 border-t border-gray-300">
      <app-map/>
  <div class="grid md:grid-cols-3 gap-6 text-gray-700">
    <div>
      <h4 class="font-bold mb-2">Địa chỉ</h4>
      <div>Ngõ 37 Đường Hà Huy Tập, Hà Huy Tập, Vinh, Nghệ An</div>
    </div>

    <div>
      <h4 class="font-bold mb-2">Liên hệ</h4>
      <a href="tel:0971659971" class="icon phone"><p><i class="pi pi-phone mr-2"></i> 0971 659 971</p></a>
      
    </div>

    <div>
      <h4 class="font-bold mb-2">Theo dõi chúng tôi</h4>
      <div class="flex space-x-4">
        <a href="https://m.me/thinhnhanf" target="_blank" class="icon fb">
        <i class="fab fa-facebook-messenger"></i>
    </a>
    
       <a href="https://www.facebook.com/thinhnhanf" target="_blank" class="icon fb">
        <i class="pi pi-facebook"></i>
        </a>
        <a href="tel:0971659971" class="icon phone">
            <i class="pi pi-phone"></i>
        </a>
            <a href="https://maps.app.goo.gl/Wosx9e5ngZ6xUmHj9"
            target="_blank" class="icon map">
            <i class="pi pi-map-marker"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="text-center mt-6 text-sm text-gray-500 space-y-1">
    <div>&copy; 2025 Thịnh Nhàn. Gắp một miếng – Nhớ cả đời.</div>
    <div class="italic">* Tất cả hình ảnh chỉ mang tính chất minh họa</div>
  </div>
    </div>`,
  imports: [MapComponent]
})
export class AppFooter { }
