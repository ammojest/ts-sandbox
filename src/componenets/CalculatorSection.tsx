import React from "react";

const CalculatorSection = () => {

    const addsTwoTogether = (a: number, b:number) => {
        return a + b
    }

    return ( 
        <div>
            <form>
            <label>
                first number:
                <input type="text" name="first-number" />
            </label>
            <label>
                second number:
                <input type="text" name="second-number" />
            </label>
            </form>
        </div>
     );
}
 
export default CalculatorSection;