function twoFer(name: string = 'you'): string {
    return `one for me, one for ${name}`;
}
twoFer();
twoFer('Ehsan');

function isLeapYear(year: number): boolean {
    return year % 400 == 0;
}
