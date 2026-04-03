function mainReader(number, locale = 'en-US') {
    if (locale === 'id-ID') return indonesia(number);
    return english(number);
}

// Indonesian version
function indonesia(number) {
    const satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

    if (number === 0) return 'nol';

    function convert(num) {
        if (num < 10) return satuan[num];
        if (num < 20) return num == 11 ? 'sebelas' : satuan[num - 10] + ' belas';
        if (num < 100) {
            let result = satuan[Math.floor(num / 10)] + ' puluh';
            if (num % 10 !== 0) result += ' ' + convert(num % 10);
            return result;
        }
        if (num < 200) return 'seratus' + (num - 100 !== 0 ? ' ' + convert(num - 100) : '');
        if (num < 1000) return satuan[Math.floor(num / 100)] + ' ratus' + (num % 100 !== 0 ? ' ' + convert(num % 100) : '');
        if (num < 2000) return 'seribu' + (num - 1000 !== 0 ? ' ' + convert(num - 1000) : '');
        if (num < 1000000) return convert(Math.floor(num / 1000)) + ' ribu' + (num % 1000 !== 0 ? ' ' + convert(num % 1000) : '');
        if (num < 1000000000) return convert(Math.floor(num / 1000000)) + ' juta' + (num % 1000000 !== 0 ? ' ' + convert(num % 1000000) : '');
        if (num < 1000000000000) return convert(Math.floor(num / 1000000000)) + ' miliar' + (num % 1000000000 !== 0 ? ' ' + convert(num % 1000000000) : '');
        return convert(Math.floor(num / 1000000000000)) + ' triliun' + (num % 1000000000000 !== 0 ? ' ' + convert(num % 1000000000000) : '');
    }

    return convert(number);
}

// English version
function english(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if (number === 0) return 'zero';

    function convert(num) {
        if (num < 10) return ones[num];
        if (num > 10 && num < 20) return teens[num-11];
        if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + convert(num % 10) : '');
        if (num < 200) return 'one hundred' + (num - 100 !== 0 ? ' ' + convert(num - 100) : '');
        if (num < 1000) return convert(Math.floor(num / 100)) + ' hundred' + (num % 100 !== 0 ? ' ' + convert(num % 100) : '');
        if (num < 1000000) return convert(Math.floor(num / 1000)) + ' thousand' + (num % 1000 !== 0 ? ' ' + convert(num % 1000) : '');
        if (num < 1000000000) return convert(Math.floor(num / 1000000)) + ' million' + (num % 1000000 !== 0 ? ' ' + convert(num % 1000000) : '');
        if (num < 1000000000000) return convert(Math.floor(num / 1000000000)) + ' billion' + (num % 1000000000 !== 0 ? ' ' + convert(num % 1000000000) : '');
        return convert(Math.floor(num / 1000000000000)) + ' trillion' + (num % 1000000000000 !== 0 ? ' ' + convert(num % 1000000000000) : '');
    }

    return convert(number);
}


// ----- Export for ESM -----
export default mainReader;

// ----- Fallback for CommonJS -----
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mainReader;
}
