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

    toString(){
        return "firsrName = "+ this.firstName + ", lastNAme = " + this.lastName + 
                ", address = " + this.address + ", city = " + this.city + ", state = "+ this.state+
                ", zip = " + this.zip + ", phoneNumber = " + this.phoneNumber + ", email = " +this.email;
    }
}