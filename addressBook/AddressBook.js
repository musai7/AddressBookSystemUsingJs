class AddressBookContact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(){

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
const ps = require('prompt-sync');
const prompt = ps();
let addContact = (addressBookContact) => {

    addressBookContact.setFirstName(prompt('enter first name : '));
    addressBookContact.setLastName(prompt('enter last name : '));
    addressBookContact.setAddress(prompt('enter address : '));
    addressBookContact.setCity(prompt('enter city name : '));
    addressBookContact.setState(prompt('enter state name : '));
    addressBookContact.setZip(prompt('enter zip : '));
    addressBookContact.setPhoneNumber(prompt('enter phone number : '));
    addressBookContact.setEmail(prompt('enter email : '));
    return addressBookContact;
};

let editContct = ()=>{
    let firstName = prompt("enter a first name to edit contact : ")
    let addressBookContact = new AddressBookContact();
    for(i = 0;i < addressBookArr.length;i++){
       if(addressBookArr[i].getFirstName()==firstName){
            let contact = addContact(addressBookContact)
            addressBookArr[i] = contact;
            console.log(contact.toString());
       }
    }
}

let addressBookArr = new Array();
try {
    let addressBookContact = new AddressBookContact();
    let input =0
    while(input != 3){
        input = prompt('enter \n 1.for add contact \n 2.for edit contact \n 3.for exit \n');
        if(input == 1){
            let contact = addContact(addressBookContact)
            addressBookArr.push(contact);
            console.log(contact.toString());
        }else if(input == 2){
            editContct();
        }
        else
            break;
    }
} catch (err) {
    console.error(err);
}
console.log(addressBookArr.toString());