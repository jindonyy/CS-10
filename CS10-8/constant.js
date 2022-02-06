const BARISTA_NUM = 4;
const START_MSG = "'성함, 메뉴 번호, 개수'를 입력해주세요. \n예) dony, 3:2, 2:1";
const EXIT_MSG = 'esc';
const MENUS = [{
    name: '사과주스🍎',
    makingTime: 3
}, {
    name: '레몬에이드🍋',
    makingTime: 5
}, {
    name: '블루베리스무디🫐 ',
    makingTime: 10
}];

module.exports = { BARISTA_NUM, START_MSG, EXIT_MSG, MENUS };