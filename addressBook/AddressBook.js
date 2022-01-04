class AddressBookContact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    setFirstName(firstName){
        let pattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(pattern.test(firstName)){
            this.firstName =firstName;
        }else{
            throw "first name is not matching"
        }
    }

    getFirstName(){
        return this.firstName;
    }

    setLastName(lastName){
        let pattern = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(pattern.test(lastName)){
            this.lastName =lastName;
        }else{
            throw "last name is not matching"
        }
    }

    getLastName(){
        return this.lastName;
    }

    setAddress(address){
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(address)){
            this.address =address;
        }else{
            throw "address is not matching"
        }
    }

    getAddress(){
        return this.address;
    }

    setCity(city){
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(city)){
            this.city =city;
        }else{
            throw "city is not matching"
        }
    }

    getCity(){
        return this.city;
    }

    setState(state){
        let pattern = RegExp('^[A-Za-z]{4,}$');
        if(pattern.test(state)){
            this.state =state;
        }else{
            throw "state is not matching"
        }
    }

    getState(){
        return this.state;
    }

    setZip(zip){
        let pattern = RegExp('^[1-9]{1}[0-9]{2}[\\s]{0,1}[0-9]{3}$');
        if(pattern.test(zip)){
            this.zip =zip;
        }else{
            throw "zip is not matching"
        }
    }

    getZip(){
        return this.zip;
    }

    setPhoneNumber(phoneNumber){
        let pattern = RegExp('^[6-9]{1}[0-9]{9}$');
        if(pattern.test(phoneNumber)){
            this.phoneNumber =phoneNumber;
        }else{
            throw "phonenumber is not matching"
        }
    }

    getPhoneNumber(){
        return this.phoneNumber;
    }

    setEmail(email){
        let pattern = RegExp('^[a-zA-Z0-9]+([-_+.]?[a-zA-Z0-9])*[@]([A-Za-z0-9])+[.][A-Za-z]{2,}([.][A-Za-z]{2,}){0,1}$');
        if(pattern.test(email)){
            this.email =email;
        }else{
            throw "email is not matching"
        }
    }

    getEmail(){
        return this.email;
    }

    toString(){
        return "firsrName = "+ this.firstName + ", lastNAme = " + this.lastName + 
                ", address = " + this.address + ", city = " + this.city + ", state = "+ this.state+
                ", zip = " + this.zip + ", phoneNumber = " + this.phoneNumber + ", email = " +this.email;
    }
}

let addressBookContact = new AddressBookContact("Musai","Borra","gopalapuram","ravulapalem","andhra","533 274","8463985868","musai307@gmail.com");
console.log(addressBookContact.toString());