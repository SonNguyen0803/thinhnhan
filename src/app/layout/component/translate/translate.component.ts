import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Constants } from '../../../../helpers/constants';
import { language } from '../../../../models/language';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss'
})
export class TranslateComponent {
  langs = new Array<language>;
  selectedLang: any;

  constructor(public translate: TranslateService) {
    translate.addLangs(['ko', 'en']);
    const browserLang = Constants.getLang();
    translate.setDefaultLang(browserLang);

    localStorage.setItem('language', browserLang);
    translate.use(browserLang);

    this.selectedLang = browserLang;

    let lang = this.translate.getLangs();
    lang.forEach((element: any) => {
      this.langs.push(new language(element))
    });

    this.selectedLang = new language(Constants.getLang());
    console.log(lang)
  }

  changeLang() {
    localStorage.setItem('language', this.selectedLang.lang);
    this.translate.use(this.selectedLang.lang);
    location.reload();
  }
}
