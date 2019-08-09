

export const getCheckProduct = (event) => {

    return {
        type: 'getproduct',
        payload: event.target.value
    }
};



export const ValidAdmin = () => {

    return {
        type: 'validAddmin'

    }
};

export const Valid = () => {

    return {
        type: 'valid'

    }
};





