function fetchAPI(param) {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const appKey = 'e8a0da77-a86b-42b1-856e-0b01c21eba27'
    const url = 'http://124.220.2.99:4312/Thingworx/Things/VM-TR3/Properties' + param + '?appkey=' + appKey
    //CurrentHumidity
    return fetch(url)
        .then(function (result) {
            console.log('result is:', result.json)
            return result;
        });
}

export default fetchAPI;