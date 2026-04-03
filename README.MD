# @alawidevelopment/terbilang

![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![npm](https://img.shields.io/badge/npm-not%20published-lightgrey)
![License](https://img.shields.io/badge/license-MIT-blue)

Indonesian & English number-to-words (**terbilang**) library for JavaScript.  
Supports **ESM import** and **CommonJS** require. Works directly from GitHub or npm (if published later).  

---

## Installation

### Install from GitHub
```bash
npm install https://github.com/alawidevelopment/terbilang.git
```

### Install from npm
``` bash
    -- coming soon --
```

## Usage

## ESM (import)

``` javascript
import terbilang from 'terbilang';

// Indonesian
console.log(terbilang(1500, 'id-ID')); // Output: "seribu lima ratus"

// English (default)
console.log(terbilang(21));           // Output: "twenty-one"

// Zero
console.log(terbilang(0, 'id-ID'));   // Output: "nol"
```

## CommonJS (require)

``` javascript
const terbilang = require('terbilang');

// Indonesian
console.log(terbilang(1500, 'id-ID')); // Output: "seribu lima ratus"

// English (default)
console.log(terbilang(21));           // Output: "twenty-one"

// Zero
console.log(terbilang(0, 'id-ID'));   // Output: "nol"
```