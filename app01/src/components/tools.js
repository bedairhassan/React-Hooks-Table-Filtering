const ShapeDynamic = (data) => {

    var arr = data.map(item => item.shape)

    let set = new Set()
    arr.forEach(item => set.add(item)) // set is ready

    arr = []
    arr.push(`-`)
    set.forEach(item => arr.push(item))

    // console.log(arr)
    return arr
}

const ColorDynamic = (data) => {

    var arr = data.map(item => item.color)

    let set = new Set()
    arr.forEach(item => set.add(item)) // set is ready

    arr = []
    arr.push(`-`)
    set.forEach(item => arr.push(item))

    // console.log(arr)
    return arr
}

const FilterColor = (data, colorGuest) => {

    if (colorGuest === `-`) {
        return data;
    }

    const arr = data.filter(({ color }) => color === colorGuest)
    console.log(arr)

    return arr
}

const FilterShape = (data, shapeGuest) => {

    if (shapeGuest === `-`) {
        return data;
    }

    const arr = data.filter(({ shape }) => shape === shapeGuest)
    console.log(arr)

    return arr
}

module.exports = {

    ColorDynamic, ShapeDynamic, FilterColor,FilterShape
}