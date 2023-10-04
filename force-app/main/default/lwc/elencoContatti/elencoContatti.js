import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ElencoContatti.getContacts';
import { refreshApex } from '@salesforce/apex';

const columns = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text'},
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email Address', fieldName: 'Email', type: 'text' },
    { label: 'Phone Number', fieldName: 'Phone', type: 'phone' },
];

// use a wire method to get the data from the Apex controller called ElencoContatti
export default class ElencoContatti extends LightningElement {
    columns = columns;
    @wire(getContacts) contacts;

    // now i need to hadle the event of the button

    refreshData(){
        refreshApex(this.contacts);


}
}

