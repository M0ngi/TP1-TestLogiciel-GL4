const filter_males = (data) => {
    return data.filter((ans) => {
        return ans?.response?.gender == 'M'
    })
}

const filter_females = (data) => {
    return data.filter((ans) => {
        return ans?.response?.gender == 'F'
    })
}

const avg_age = (data) => {
    return data.reduce((prev, curr) => {
        return prev + (curr?.response?.age ?? 0)
    }, 0) / data.length
}

const count_above_age = (data, age) => {
    return data.filter((ans) => {
        return ans?.response?.age >= age
    }).length
}

module.exports = {
    filter_males,
    filter_females,
    avg_age,
    count_above_age,
}