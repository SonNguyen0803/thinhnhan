import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './authentication.service';
import { ConfigService } from './ConfigService';
import { dataRequest } from '../../../models/dataRequest';
import { EnumAction, EnumOption } from '../../../models/EnumOption';
import { UriApi } from '../../../helpers/UriApi';
import { Constants } from '../../../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  api_getData = ConfigService.apiUrl + "/CommonMst/GetData";
  api_getDataAuth = ConfigService.apiUrl + "/CommonMst/GetDataAuthorize";
  api_post_common = ConfigService.apiUrl + "/Setting/PostData";
  today = new Date();

  body: dataRequest = {
    request: {
      jsonParams: {},
      functionCode: 109,
      option: EnumOption.GetAll,
      data: "",
      dataList: "",
      menuCd: '',
      enumAction: EnumAction.View
    }
  };

  constructor(private http: HttpClient, private messageService: MessageService, private translate: TranslateService,
    private auth: AuthenticationService
  ) { }

  showError(content: any) {
    const formatted = content.replace(/\.\s*/g, '.\n');
    this.messageService.add({ severity: 'error', summary: this.translate.instant('LANGCODE.COMOTL0001'), detail: formatted, life: 3000 });
  }

  showSuccess(content: any) {
    const formatted = content.replace(/\.\s*/g, '.\n');
    this.messageService.add({ severity: 'success', summary: this.translate.instant('LANGCODE.COMOTL0004'), detail: formatted, life: 3000 });
  }

  // uploadFile(data: any): Promise<{ url: string }> {
  //   return new Promise((resolve, reject) => {
  //     const formData = new FormData();
  //     formData.append('file', data[0]);
  //     this.http.post(UriApi.api_upload, formData).subscribe((res: any) => {
  //       if (res?.isOK) {
  //         resolve({ url: res?.result?.dataRes?.path })
  //       }
  //       else {
  //         reject(res?.errorMessages)
  //       }
  //     })
  //   })
  // }


  getData(menuCd: string, functionCode: number, enumAction = EnumAction.View, jsonParams = {}) {
    this.body.request.functionCode = functionCode;
    this.body.request.jsonParams = jsonParams;
    this.body.request.menuCd = menuCd;
    this.body.request.enumAction = enumAction;

    return this.http.post(this.api_getData, this.body);
  }

  getDataAuth(menuCd: string, functionCode: number, enumAction = EnumAction.View, jsonParams = {}) {
    this.body.request.functionCode = functionCode;
    this.body.request.jsonParams = jsonParams;
    this.body.request.menuCd = menuCd;
    this.body.request.enumAction = enumAction;

    return this.http.post(this.api_getDataAuth, this.body);
  }

  postData(menuCd: string, functionCode: number, enumAction = EnumAction.View, jsonParams = {}) {
    this.body.request.functionCode = functionCode;
    this.body.request.jsonParams = jsonParams;
    this.body.request.menuCd = menuCd;
    this.body.request.enumAction = enumAction;

    return this.http.post(this.api_post_common, this.body);
  }

  // getMenu() {
  //   this.body.request.functionCode = 101;
  //   this.body.request.jsonParams = '{"p_option":1}';

  //   return this.http.post(UriApi.api_Menu_get, this.body);
  // }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getDateNow(num: number = 0) {
    let date: Date = new Date();
    date.setDate(date.getDate() + num);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  formatStringDateYYYMMDDHHMMSS(dateString: any): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }

    date.setHours(date.getHours() + 9);

    const pad = (num: number) => String(num).padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  formatDateTime(dateStr: string): string {
  if (!dateStr || dateStr.length !== 14) return '';

  const year = parseInt(dateStr.substring(0, 4));
  const month = parseInt(dateStr.substring(4, 6)) - 1;
  const day = parseInt(dateStr.substring(6, 8));
  const hour = parseInt(dateStr.substring(8, 10));
  const minute = parseInt(dateStr.substring(10, 12));
  const second = parseInt(dateStr.substring(12, 14));

  const utcDate = new Date(year, month, day, hour, minute, second);

  utcDate.setUTCHours(utcDate.getUTCHours() + 9);

  const y = utcDate.getFullYear();
  const m = String(utcDate.getMonth() + 1).padStart(2, '0');
  const d = String(utcDate.getDate()).padStart(2, '0');
  const h = String(utcDate.getHours()).padStart(2, '0');
  const min = String(utcDate.getMinutes()).padStart(2, '0');
  const s = String(utcDate.getSeconds()).padStart(2, '0');

  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

  formatDateYYYYMMDD(dateString: any): string {
    const date = new Date(dateString);
    const pad = (num: any) => String(num).padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Months are zero-based
    const day = pad(date.getDate());

    return `${year}-${month}-${day}`;
  }

  formatNum(value: number) {
    return new Intl.NumberFormat('en-US').format(value);
  }

  copyText(text: string) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.showSuccess(this.translate.instant('MESSCODE.MS0000000081'));
        })
        .catch((err) => {
          console.error('Copy failed', err);
          this.showError('Copy failed.');
        });
    } else {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (successful) {
           this.showSuccess(this.translate.instant('MESSCODE.MS0000000081'));
        } else {
          this.showError('Copy failed.');
        }
      } catch (err) {
        console.error('Fallback: Copy failed', err);
        this.showError('Copy failed.');
      }
    }
  }
}
