const theme_btn = document.getElementById("theme__btn");
const circle = document.getElementById("circle");
const theme_value = document.getElementById("theme__value");

const body = document.querySelector("body");
const calc = document.querySelector(".container__one h1");
const theme = document.querySelector(".theme h2")
const theme_nums = document.querySelector(".theme__nums");
const container_two = document.querySelector(".container__two");
const container_three = document.querySelector(".container__three");
const calc_btns = document.querySelectorAll(".calc__btns");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const attribution = document.querySelector(".attribution");

const calc_output = document.querySelector(".container__two h1");
const calc_output_record = document.querySelector(".container__two div p");

let calculationArray = [];

theme__btn.addEventListener("click", function(){
    if (theme_value.value === "1") {
        circle.style.left = "1.75rem";
        theme_value.value = "2";
        /* CHANGE THEME 2 */
        body.style.backgroundColor = "hsl(0, 0%, 90%)"
        calc.style.color = "rgb(0, 0, 0)";
        theme.style.color = "rgb(0, 0, 0)";
        theme_nums.style.color = "rgb(0, 0, 0)";
        theme_btn.style.backgroundColor = "hsl(0, 5%, 81%)";
        circle.style.color = "hsl(25, 98%, 40%)";
        container_two.style.backgroundColor = "hsl(0, 0%, 93%)";
        container_two.style.color = "hsl(60, 10%, 19%)";
        container_three.style.backgroundColor = "hsl(0, 5%, 81%)";
        for (let i = 0; i < calc_btns.length; i++) {
            calc_btns[i].style.color = "hsl(60, 10%, 19%)";
            calc_btns[i].style.backgroundColor = "hsl(45, 7%, 89%)";
            calc_btns[i].style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
        }
        del.style.color = "rgb(255, 255, 255)";
        del.style.backgroundColor = "hsl(185, 42%, 37%)";
        del.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
        reset.style.color = "rgb(255, 255, 255)";
        reset.style.backgroundColor = "hsl(185, 42%, 37%)";
        reset.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
        equal.style.color = "rgb(255, 255, 255)";
        equal.style.backgroundColor = "hsl(25, 98%, 40%)";
        equal.style.boxShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";
        attribution.style.color = "rgb(0, 0, 0)";
        /* END */
    }
    else if (theme_value.value === "2") {
        circle.style.left = "3.35rem";
        theme_value.value = "3";
        /* CHANGE THEME 3 */
        body.style.backgroundColor = "hsl(268, 75%, 9%)"
        calc.style.color = "hsl(52, 100%, 62%)";
        theme.style.color = "hsl(52, 100%, 62%)";
        theme_nums.style.color = "hsl(52, 100%, 62%)";
        theme_btn.style.backgroundColor = "hsl(268, 71%, 12%)";
        circle.style.color = "hsl(176, 100%, 44%)"
        container_two.style.backgroundColor = "hsl(268, 71%, 12%)";
        container_two.style.color = "hsl(52, 100%, 62%)";
        container_three.style.backgroundColor = "hsl(268, 71%, 12%)";
        for (let i = 0; i < calc_btns.length; i++) {
            calc_btns[i].style.color = "hsl(52, 100%, 62%)";
            calc_btns[i].style.backgroundColor = "hsl(268, 47%, 21%)";
            calc_btns[i].style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
        }
        del.style.color = "rgb(255, 255, 255)";
        del.style.backgroundColor = "hsl(281, 89%, 26%)";
        del.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
        reset.style.color = "rgb(255, 255, 255)";
        reset.style.backgroundColor = "hsl(281, 89%, 26%)";
        reset.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
        equal.style.color = "hsl(198, 20%, 13%)";
        equal.style.backgroundColor = "hsl(176, 100%, 44%)";
        equal.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
        attribution.style.color = "rgb(255, 255, 255)";
        /* END */
    }
    else if (theme_value.value === "3") {
        circle.style.left = ".3rem";
        theme_value.value = "1";
        /* CHANGE THEME 1 */
        body.style.backgroundColor = "hsl(222, 26%, 31%)"
        calc.style.color = "hsl(0, 0%, 100%)";
        theme.style.color = "hsl(0, 0%, 100%)";
        theme_nums.style.color = "hsl(0, 0%, 100%)";
        theme_btn.style.backgroundColor = "hsl(223, 31%, 20%)";
        circle.style.color = "hsl(6, 63%, 50%)"
        container_two.style.backgroundColor = "hsl(224, 36%, 15%)";
        container_two.style.color = "hsl(0, 0%, 100%)";
        container_three.style.backgroundColor = "hsl(223, 31%, 20%)";
        for (let i = 0; i < calc_btns.length; i++) {
            calc_btns[i].style.color = "hsl(221, 14%, 31%)";
            calc_btns[i].style.backgroundColor = "hsl(30, 25%, 89%)";
            calc_btns[i].style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
        }
        del.style.color = "hsl(0, 0%, 100%)";
        del.style.backgroundColor = "hsl(225, 21%, 49%)";
        del.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
        reset.style.color = "hsl(0, 0%, 100%)";
        reset.style.backgroundColor = "hsl(225, 21%, 49%)";
        reset.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";

        equal.style.color = "hsl(0, 0%, 100%)";
        equal.style.backgroundColor = "hsl(6, 63%, 50%)";
        equal.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
        attribution.style.color = "rgb(255, 255, 255)";
        /* END */
    }
})

for (let i = 0; i < calc_btns.length; i++) {
    calc_btns[i].addEventListener("click", function(){
        let calc_btns_value = calc_btns[i].textContent;

        /* Operators */
        if (calc_btns_value === "+" || calc_btns_value === "-" || calc_btns_value === "x" || calc_btns_value === "/" || calc_btns_value === "=") {
            let last_char = calc_output_record.textContent.charAt(calc_output_record.textContent.length - 1);
            /* Addition, Subtraction, Multiply, Divide */            
            if (calc_btns_value === "+" || calc_btns_value === "-" || calc_btns_value === "x" || calc_btns_value === "/") {
                /* If the calculator output is empty */
                if (calc_output_record.textContent === "") {
                    calc_output_record.textContent += calc_output.textContent;
                    /* Change to number type, and send it to the array */
                    calculationArray.push(parseFloat(calc_output.textContent));
                    /* If the calculator output is not equal to "0" */
                    if (calc_output.textContent !== "0") {
                        calc_output.textContent = "0";
                    }
                    calc_output_record.textContent += calc_btns_value;
                }
                else {
                    if (last_char === "+" || last_char === "-" || last_char === "x" || last_char === "/") {
                        calc_output_record.textContent += calc_output.textContent;
                        calculationArray.push(parseFloat(calc_output.textContent));
                        calc_output.textContent = "0";

                        let first_num = calculationArray[0]
                        let second_num = calculationArray[1];
                        
                        if (last_char === "+") {
                            /* Addition */
                            let addition = first_num + second_num;

                            calculationArray = [];
                            calculationArray.push(addition);

                            calc_output_record.textContent = addition.toString();
                            calc_output_record.textContent += calc_btns_value;
                        }
                        else if (last_char === "-") {
                            /* Subtraction */
                            let subtraction = first_num - second_num;
                            
                            calculationArray = [];
                            calculationArray.push(subtraction);

                            calc_output_record.textContent = subtraction.toString();
                            calc_output_record.textContent += calc_btns_value;
                        }
                        else if (last_char === "x") {
                            /* Multiply */
                            let multiply = first_num * second_num;

                            calculationArray = [];
                            calculationArray.push(multiply);

                            calc_output_record.textContent = multiply.toString();
                            calc_output_record.textContent += calc_btns_value;
                        }
                        else if (last_char === "/") {
                            /* Divide */
                            let divide = first_num / second_num;

                            calculationArray = [];
                            calculationArray.push(divide);

                            calc_output_record.textContent = divide.toString();
                            calc_output_record.textContent += calc_btns_value;
                        }
                    }
                    else if (last_char !== "+" || last_char !== "-" || last_char !== "x" || last_char !== "/") {
                        calc_output_record.textContent = calc_output.textContent;
                        calculationArray = [];
                        calculationArray.push(parseFloat(calc_output.textContent));
                        calc_output_record.textContent += calc_btns_value;
                        calc_output.textContent = "0";
                    } 
                }
            }
            /* Equal */
            else {
                calculationArray.push(parseFloat(calc_output.textContent));
                calc_output.textContent = "0";

                let first_num = calculationArray[0];
                let second_num = calculationArray[1];
                
                if (last_char === "+") {
                    /* Addition */
                    let addition = first_num + second_num;

                    calculationArray = [];
                    calculationArray.push(addition);

                    calc_output_record.textContent = addition.toString();
                }
                else if (last_char === "-") {
                    /* Subtraction */
                    let subtraction = first_num - second_num;

                    calculationArray = [];
                    calculationArray.push(subtraction);

                    calc_output_record.textContent = subtraction.toString();
                }
                else if (last_char === "x") {
                    /* Multiply */
                    let multiply = first_num * second_num;

                    calculationArray = [];
                    calculationArray.push(multiply);

                    calc_output_record.textContent = multiply.toString();
                }
                else if (last_char === "/") {
                    /* Divide */
                    let divide = first_num / second_num;

                    calculationArray = [];
                    calculationArray.push(divide);

                    calc_output_record.textContent = divide.toString();
                }
            }
        }
        /* Reset */
        else if (calc_btns_value === "Reset") {
            calc_output.textContent = 0;
            calc_output_record.textContent = "";
            calculationArray = [];
        }
        /* Del */
        else if (calc_btns_value === "Del") {
            /* If the calculator output length is not equal to 1 */
            if (calc_output.textContent.length !== 1) {
                calc_output.textContent = calc_output.textContent.slice(0, calc_output.textContent.length - 1);
            }
            /* Else if the calculator output length is equal to 1 and the calculator output last digit is not "0" */
            else if (calc_output.textContent.length === 1 && calc_output.textContent !== "0") {
                calc_output.textContent = "0";
            }
        }
        /* Number */
        else {
            /* If the calculator output is "0" and the length is 1 */
            if (calc_output.textContent === "0" && calc_output.textContent.length === 1) {
                /* When the calculator number buttons clicked other than "0" */
                if (calc_btns_value !== "0") {
                    /* When the calculator number buttons clicked is "." */
                    if (calc_btns_value === ".") {
                        calc_output.textContent += calc_btns_value;
                    }
                    else {
                        calc_output.textContent = calc_btns_value;
                    }
                }
            }
            else {
                calc_output.textContent += calc_btns_value;
            }
        }
    })
}