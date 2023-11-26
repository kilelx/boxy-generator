export default function getShadowBoxValue(shadows) {
    let finalString = "";

    shadows.forEach(shadow => {
        if(shadow.active) {
            if(shadow.inset) finalString += "inset "

            shadow.inputs.forEach(input => {
                if (input.type === "range") finalString += `${input.value}px `
                else if (input.type === "color") finalString += `${input.value}`
            })

        }
        // If we are at the last shadow, we add a ";", else we add a ","
        if(shadows.indexOf(shadow) === shadows.length - 1) finalString += ";"
        else finalString += ", "
    });

    return finalString
}