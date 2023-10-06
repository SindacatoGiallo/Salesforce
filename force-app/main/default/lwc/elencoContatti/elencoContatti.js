import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ElencoContatti.getContacts';
import { refreshApex } from '@salesforce/apex';



const columns = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text'},
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email Address', fieldName: 'Email', type: 'text' },
    { label: 'Phone Number', fieldName: 'Phone', type: 'phone' },
];

// Getter for the current set of records to display



// use a wire method to get the data from the Apex controller called ElencoContatti
export default class ElencoContatti extends LightningElement {
    columns = columns;
    pageSize = 5;
    currentPage = 1;
    totalRecords;
    totalPages;
    contacts;
    wiredContactsResult;


    @wire(getContacts)
    wiredContacts(result) {
        this.wiredContactsResult = result;
        const { data, error } = result;

        if (data) {
            this.contacts = data;
            this.totalRecords = data.length;
            this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
        } else if (error) {
            // Handle error. You might want to set an error message here.
            console.error("Error fetching contacts: ", error);
        }
    }
    
    get currentRecords() {
        let start = (this.currentPage - 1) * this.pageSize;
        let end = this.currentPage * this.pageSize;
        return this.contacts ? this.contacts.slice(start, end) : []; 
    }
    // Handlers for pagination
    handleNext() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
    
    handlePrevious() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    // now i need to hadle the event of the button
    @api
    refreshData(){
        console.log('Refresh Datatable called!');
        refreshApex(this.wiredContactsResult);
        
    }
    
    get isPreviousDisabled() {
        return this.currentPage <= 1;
    }
    
    get isNextDisabled() {
        return this.currentPage >= this.totalPages;
    }


}

