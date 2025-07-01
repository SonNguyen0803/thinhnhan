export class Constants {

    public static Admin = 1;
    public static Agency = 2;
    public static Customer = 3;

    public static Role_Root = 1;
    public static Role_Admin = 2;
    public static Role_Agency = 3;

    public static englishLocale: any = {
        firstDayOfWeek: 0,
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: "Today",
        clear: "Clear",
    };

    public static koreanLocale: any = {
        firstDayOfWeek: 0,
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        today: "오늘",
        clear: "초기화",
    };

    public static dayNamesShort = {
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ko: ['일', '월', '화', '수', '목', '금', '토']
    };

    public static dayName = (dayIndex: number): string => {
        const jsIndex = (dayIndex - 1 + 7) % 7;
        const language = this.getLang().toUpperCase() === 'KO' ? 'ko' : 'en';
        return this.dayNamesShort[language]?.[jsIndex] || '';
    }
    public static File: string = 'File';
    public static Upload: string = 'Upload';
    public static Uploads: string = 'Uploads';
    public static CommonMst: string = 'CommonMst';
    public static GetCountry: string = 'GetCountry';

    // Identities
    public static Identities: string = 'Identities';
    public static Auth: string = 'Auth';
    public static Authenticate: string = 'Authenticate';
    public static Menu: string = 'Menu';
    public static Get: string = 'Get';
    public static Post: string = 'Post';
    public static Update: string = 'Update';
    public static Delete: string = 'Delete';
    public static Save: string = 'Save';
    public static CreateUser: string = 'CreateUser';
    public static Category: string = 'Category';
    public static BomMst: string = 'BomMst';
    public static Copy: string = 'Copy';
    public static ValidToken: string = 'ValidToken';


    //Settings
    //public static Settings : string =`${ConfigService.apiUrl}/${"Settings"}`;
    public static Controller: string = "Setting";
    public static Banner: string = "Banner";
    public static FAQ: string = "FAQ";
    public static Notification: string = "Notification";
    public static Popup: string = "Popup";
    public static UserAuth: string = "Auth";
    public static SaveSystem: string = "SaveSystem";
    public static Config: string = "Config";
    public static Coupon: string = "Coupon";


    public static Member: string = "Member";
    //Product
    public static Products: string = "Products";
    public static BomHD: string = "BomHD";
    public static Duplicate: string = "Duplicate";

    //Order
    public static OrderManagement: string = "OrderManagement"
    public static OrderCompany: string = "OrderCompany"
    public static CheckStock: string = "CheckStock"
    public static TranferWMS: string = "TranferWMS"
    public static CancelOrder: string = "CancelOrder"
    public static MappingOrder: string = "MappingOrder"
    public static Return: string = "Return";
    public static Cancel: string = "Cancel";

    //return
    public static ReturnManagement: string = 'ReturnManagement';


    public static CurrentUser: string = 'CurrentUser'; // local storage
    public static CurrentMenu: string = 'CurrentMenu'; // local storage

    // api get ip
    public static ipify: string = 'https://api.ipify.org?format=json';


    public static showError(errorMessages: any[]) {
        let message = '';
        errorMessages.forEach((x: any) => {
            message += x?.errorMessage + '\n\n'
        });

        return message;
    }

    public static getLang() {
        var language = localStorage.getItem('language');
        if (!language)
            language = "ko";
        return language;
    }


    public static activeYNDropDown = [
        { key: 'Y', value: 'Y' },
        { key: 'N', value: 'N' },
    ]

    public static getActiveFilter(translate: any): ActiveFilterItem[] {
        return [
            { key: 'A', value: translate.instant('LANGCODE.COMOLB0012') },
            { key: 'Y', value: 'Y' },
            { key: 'N', value: 'N' },
        ];
    }

    public static Pending: number = 1;
    public static In_Progress: number = 2;
    public static Completed: number = 3;
    public static Partial_completed: number = 4;
    public static Partial_processing: number = 5;
    public static Cancelled: number = 6;
    public static Fail: number = 7;
}

export interface ActiveFilterItem {
    key: string;
    value: string;
}