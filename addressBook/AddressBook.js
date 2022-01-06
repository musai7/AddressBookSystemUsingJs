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
let addContact = () => {

    let addressBookContact = new AddressBookContact();
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

let deleteContact = ()=>{
    let firstName = prompt("enter a first name to delete contact : ")
    let index = addressBookArr.findIndex(contact => contact.getFirstName()== firstName);
    addressBookArr.splice(index);
    console.log(addressBookArr.toString());
}

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

function countContacts (count,contact){
    if(contact != null){
        return count+1;    
    }
    return count;
}

let checkUniqueContact = ()=>{
    let firstName = prompt("enter a first name to check uniquee contact : ");
    let count =0;
    count = addressBookArr.filter(contact => contact.getFirstName()==firstName)
                  .reduce(countContacts,0)
    return count;
}

let printContacts = () =>{
    addressBookArr.forEach(contact =>{
        console.log(contact.toString());
    })
}

let searchPersonBycityOrState = (count, contact) => {
    
    if(contact != null){
        console.log(contact.getFirstName());
        return count+1;    
    }
    return count;
}

let searchByCityOrState = () => {
    let check = parseInt(prompt("enter 1 for search person by city or 2 for by state : "));
    if(check == 1){
        let cityName = prompt("enter city name : ");
        console.log("city name " + cityName)
        count = addressBookArr.filter(contact => contact.getCity()==cityName)
                              .reduce(searchPersonBycityOrState,0)  
    }if(check == 2){
        let stateName = prompt("enter city name : ");
        console.log("state name " + stateName)
    count = addressBookArr.filter(contact => contact.getState()==stateName)
                  .reduce(searchPersonBycityOrState,0)
    }
    
    console.log("no of persoon by city name : " + count);
}

let sortEntries = () =>{
        addressBookArr.sort((contact1,contact2)=> {
            if(contact1.getFirstName()>contact2.getFirstName()){
                return 1;
            }else{
                return -1;
            }
        });
}

let addressBookArr = new Array();
try {
    let exit =true
    while(exit){
        let input = parseInt(prompt('enter \n 1.for add contact \n 2.for edit contact \n 3.for delete contact \n 4.for count contacts \n '+
        ' 5.for print contacts \n 6.search by city or state name \n 7. to sort entries \n 8.for exit \n'));
        switch(input){
            case 1:
                let check = checkUniqueContact();
                let contact;
               
                if(check == 1){
                    console.log("contact with first name already exists");
                    break;
                }else{
                    contact = addContact();
                    addressBookArr.push(contact);
                }
                console.log(contact.toString());
                break;
            case 2:
                editContct();
                break;
            case 3:
                deleteContact();
                break;
            case 4:
                let count = addressBookArr.reduce(countContacts,0);
                console.log(count);
                break;
            case 5:
                printContacts();
                break;
            case 6:
                searchByCityOrState();
                break;
            case 7:
                sortEntries();
                break;
            case 8:
                exit = false;      
        }
    }
} catch (err) {
    console.error(err);
}