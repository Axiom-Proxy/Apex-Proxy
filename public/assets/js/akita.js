// no, this isn't named after akita neru, the yellow one who wasn't in mesmerizer ( hint: yes the fuck it was, it absolutely was named after neerruuuu )

// el cock and ball torture

// override fetch with xhr cause its fast as fuck
window.fetch = function(url, options) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                resolve(request.response);
            } else {
                // is this what i should add? no, will i do it anyways? yes
                if (Math.random()  * 100 < 3) { // 3% chance

                    reject(new Error("I'm a teapot", 418));
                }
                reject(new Error(request.statusText, request.status));
            }
        };
        request.onerror = function() {
            reject(new Error(request.statusText));
        };
        request.send();
    });
};

// yknow who else is faster than a fetch? my mom



windowreplace = function(str, search, replace)  {
    return str.split(search).join(replace);
},

// math optimizations
Math.old_pow = Math.pow
Math.pow = function(base, exp) {
    // all my life i want money and power, respect my mind or die of lead shower, pray my dick gets big as the eiffle tower, so i can fuck the world for 72 hours god damn i got bitch god damn i got bitchs wife girlfriend and mistress
    switch (exp) {
        case 0: return 1;
        case 1: return base;
        case 2: return base * base;
        case 3: return base * base * base;
        case 4: return base * base * base * base;
        case 5: return base * base * base * base * base;
        case 6: return base * base * base * base * base * base;
        case 7: return base * base * base * base * base* base* base;
        default: return Math.old_pow(base, exp); // fallback for larger powers
    }
}

Math.ceil = function(x) {
    if (x >= 0 && x !== Math.floor(x)) {
        return (x | 0) + 1;
    }
        
    else if (x < 0 && x !== Math.ceil(x)) {
        return (x | 0) - 1;
    } else {
         return x | 0;   
    }
};

// more optimizations that we can't really override, so we'll add them to window.akita

window.akita = [
    
ForEach = function(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
},


Map = function(arr, callback) {
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }
    return result;
},

FilterMap = function(arr, filterFn, mapFn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (filterFn(arr[i], i, arr)) {
            result.push(mapFn(arr[i], i, arr));
        }
    }
    return result;
},

concat = function(strings) {
    return strings.join('');
},

ObjectIteration = function(obj) {
    let sum = 0;
    const keys = Object.keys(obj); // keys - otherwise known as my sheds keys
    for (let i = 0; i < 1000; i++) {
        for (const key of keys) {
            sum += obj[key];
        }
    }
    return sum;
},

ObjectCopy = function(obj) {
    return {
        x: obj.x,
        y: obj.y,
        z: obj.z
    };
},


];

console.log("Akita.js loaded");