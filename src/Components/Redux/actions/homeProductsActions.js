import axios from 'axios'
export const homePageData = 'homePageData';

export const gethomePageData = (data) =>{
    return {
        type:'homePageData',
        data
    }
};

const posthomePageData= ()=>{
    return (dispatch) => {
        return axios.get(`http://localhost:3000/products`)
        .then(res => {
            dispatch(gethomePageData(res.data))
        }).catch(error => {throw(error);
        });
    };
};

export default posthomePageData;