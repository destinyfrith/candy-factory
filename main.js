const buyChocolate = () => {

    const chocolate = {
        type: "milk chocolate"
    }

    return chocolate
}

const milkChocolate = buyChocolate()

// chocolate.flavor use chocolate to add property

const addFlavoring = (chocolate) => {
    //use dot notation to add a new property
    chocolate.flavor = "mint"

    return chocolate

}

const mintChocolate = addFlavoring(milkChocolate)

const makeBarkMixture = (chocolate) => {
    if (chocolate.flavor === "mint") {
        chocolate.mixed = true
        console.log(`Mixture created`)
    }
    else {
        chocolate.mixed = false
    }
    return chocolate
}

const mixedBark = makeBarkMixture(mintChocolate)

console.log(mintChocolate)