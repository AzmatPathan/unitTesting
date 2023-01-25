//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TESTS ==========


function test__checkId(idIn, expected) {
    let result = checkHumberId(idIn);
    let msg = "<br> Value tested: " + idIn + "  Expected result: " + expected;

    let dataOutput = document.getElementById('data');
    dataOutput.innerHTML += msg;

    const para = document.createElement("span");
    let outputMsg;

    if (result === expected) {
        outputMsg = "==PASSED=="
        para.style.color = "Green"
    }
    else {
        outputMsg = "xxFAILEDxx"
        para.style.color = "red"
    }
    para.innerText = outputMsg;
    dataOutput.appendChild(para);
}

test__checkId("n12345678", true)
test__checkId("n1234567", false)
test__checkId("n123456", false)
test__checkId("N12345678",true)

test__checkId("N00000000",true)
test__checkId("ABCDESF",true)
test__checkId("N1234567",true)





