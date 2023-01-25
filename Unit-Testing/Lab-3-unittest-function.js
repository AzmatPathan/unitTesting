//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function checkHumberId(idIn) {
    let isValid = false;
    var letterNumber = /(n|N)\d{8}/;
    if (idIn.match(letterNumber)) {
        isValid = true;
    }
    return isValid;
}


