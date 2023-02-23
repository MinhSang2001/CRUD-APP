import { v4 as uuid } from "uuid"


const Products = [
        {
            id: uuid().slice(0,8),
            name: 'TP. Hà Nội',
            ditrict: "Quận Ba Đình",
            ward: ["Cống Vị, ", "Điện Biên, ", "Đội Cấn, ", "Giảng Võ, ", "Kim Mã, ", "Liễu Giai, ", "Ngọc Hà, ", "Ngọc Khánh, ", "Nguyễn Trung Trực, ", "Phúc Xá, ", "Quán Thánh, ", "Thành Công, ", "Trúc Bạch, ", "Vĩnh Phúc"],
            population: "221.893 người",
            area: '9,25 km²',
            dateEnded: "2020-12-12"
        },
        {
            id: uuid().slice(0,8),
            name: 'Tỉnh Nam Định',
            ditrict: "Huyện Vụ Bản",
            ward: [ "Cộng Hòa, ", "Đại An, ", "Đại Thắng, ", "Hiển Khánh, ", "Hợp Hưng, ", "Kim Thái, ", "Liên Bảo, ", "Liên Minh, ", "Minh Tân, ", "Minh Thuận, ", "Quang Trung, ", "Tam Thanh, ", "Tân Khánh, ", "Tân Thành, ", "Thành Lợi, ", "Trung Thành, ", "Vĩnh Hào" ],
            population: "130.862 người",
            area: '148 km²',
            dateEnded: "2022-12-12"
        },
        {
            id: uuid().slice(0,8),
            name: "TP. Hồ Chí Minh",
            ditrict: "Quận 1",
            ward: ["Bến Nghé, ", "Bến Thành, ", "Cô Giang, ", "Cầu Kho, ", "Cầu Ông Lãnh, ", "Đa Kao, ", "Nguyễn Cư Trinh, ", "Nguyễn Thái Bình, ", "Phạm Ngũ Lão, ", "Tân Định"],
            population: "205.180  người",
            area: '7,72 km²²',
            dateEnded: "2022-12-12"
        },
        {
            id: uuid().slice(0,8),
            name: "Nha Trang",
            ditrict: "Quận 2",
            ward: ["Phương Sài, ", "Tân Phước, ", "Tân Lập, ", "Phước Hải, ", "Vĩnh Trường, ", "Vĩnh Nguyên"],
            population: "136.813 người",
            area: '102 km² ',
            dateEnded: "2020-12-12"
        }
    ]
export default Products
