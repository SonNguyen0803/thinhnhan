export class Constant {
    public static dog = [
        { name: 'Hấp', img: 'luoc.jpg', price: 150000, cate: 'Dĩa' },
        { name: 'Lòng', img: 'long.jpg', price: 150000, cate: 'Dĩa' },
        { name: 'Nấu', img: 'ruouman.jpg', price: 150000, cate: 'Dĩa' },
        { name: 'Nướng', img: 'chonuong.jpg', price: 150000, cate: 'Dĩa' },
        { name: 'Sườn rán', img: 'suonran.jpg', price: 150000, cate: 'Dĩa' },
        { name: 'Chân đuôi', img: 'ruouman2.JPG', price: 150000, cate: 'Dĩa' }
    ]

    public static dessert = [
        { name: 'Mía hấp gừng', img: 'miahapgung.jpg', price: 10000, cate: 'Dĩa' },
        { name: 'Cam', img: 'cam.jpg', price: 10000, cate: 'Dĩa' },
        { name: 'Bưởi', img: 'buoi.jpg', price: 10000, cate: 'Dĩa' }
    ]

    public static drink = [
        { name: 'Trà đá', img: 'trada.jpg', price: 0, cate: 'Lon' },
        { name: 'Nước suối', img: 'nuocsuoi.jpg', price: 0, cate: 'Lon' },
        { name: 'Bia Hà Nội', img: 'biahanoi.png', price: 15000, cate: 'Lon' },
        { name: 'Cocacola', img: 'coca.jpg', price: 15000, cate: 'Lon' },
        { name: 'Bò húc', img: 'bohuc.jpg', price: 15000, cate: 'Lon' },
        { name: 'Rượu', img: 'ruou.png', price: 30000, cate: 'Chai' },
    ]

    public static link_mess = 'https://www.facebook.com/thinhnhanf';

    public static menu = [...this.dog, ...this.dessert, ...this.drink]
}