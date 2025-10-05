let bober;
const hello = 'not bober';
switch (hello) {
    case 'not bober':
        bober = 0;
        break;

    case 'almost bober':
        bober = 100;
        break;
        
    case 'boberto-roberto':
        bober = 500;
        break;

    default:
        console.log('Invalid bad words!');
}
console.log(bober); // 500
