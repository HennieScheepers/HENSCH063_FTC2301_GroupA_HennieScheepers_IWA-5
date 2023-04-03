//Added const keywords that was missing
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
//Assigned a number to NONE_SELECTED
const NONE_SELECTED = 0

let customers = '1'
//changed location variable to customerLocation as it was confliting with JS object
let customerLocation = 'RSA'
let currency = null
let shipping = 0

//Fixed conditional and assignment opps and made elseIF to change currency to '$'
if (customerLocation === 'RSA') { 
    shipping = 400
    currency = 'R' 
}else if (customerLocation === 'NAM') {
    shipping = 600 
    currency = '$'
} else {
    shipping = 800
    currency = '$'
}

// Added assignment opps to batteries and toys and removed quotation marks around NONE_SELECTED
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

//Added missing brackets
if (shoes + toys + shirts + batteries + pens > 1000) {
	if (customerLocation === 'NAM' || customerLocation === 'RSA' && customers < 2) {
            //removed calcShipping function and additional iff statement as it could be made one as above
		    shipping = 0
	}
}

//Put the shipping && customers statements in a single bracket and changed shipping assignment operator to ===
//Changed warning to FREE_WARNING
if (shipping === 0 && customers !== 1) { console.log(FREE_WARNING) }

//Changed warniing to BANNED_WARNIN
customerLocation === 'NK' ? console.log(BANNED_WARNIN) : console.log('price', currency, shoes + toys + batteries + pens + shirts + shipping)