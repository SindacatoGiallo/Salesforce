import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ElencoContatti.getContacts';

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
}

// populate the data table with the data returned from the Apex controller