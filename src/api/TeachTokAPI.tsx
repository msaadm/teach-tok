class TeachTokAPI {
    BASE_URL = 'https://cross-platform.rp.devfactory.com';

    public getForYou() {
        return fetch(this.BASE_URL + '/for_you',{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    public getCorrectAnswer (id: Number) {
        return fetch(this.BASE_URL + `/reveal?id=${id}`,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default TeachTokAPI;
