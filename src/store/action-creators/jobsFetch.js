
export const fetchJobs = () => {
    return function(dispatch) {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            .then(response => response.json())
            .then(json => dispatch({type: 'GET_JOBS', payload: json}))
    }
}