//EasyHTTP Library
//@version 2.0.0

class EasyHTTP {
    //Make an HTTP GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json()) 
            .then(data => resolve(data))
            .catch(err => reject(err));
        });        
    }

    //Make an HTTP pOST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            .then(res => res.json()) 
            .then(data => resolve(data))
            .catch(err => reject(err));
        });        
    }

    //Make an HTTP PUT Reqeust
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data) //sending data

            })
            .then(res => res.json()) 
            .then(data => resolve(data))
            .catch(err => reject(err));
        });        
    }

    //Make an HTTP DELETE Reqeust
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json()) 
            .then(() => resolve('Resource Deleted...')) //send back string
            .catch(err => reject(err));
        });        
    }

}