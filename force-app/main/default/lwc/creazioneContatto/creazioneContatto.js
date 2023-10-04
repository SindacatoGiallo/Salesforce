import { LightningElement, api } from 'lwc';
import Contact from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Phone from '@salesforce/schema/Contact.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreazioneContatto extends LightningElement {

objectApiName = Contact;
firstName = FirstName;
lastName = LastName;
email = Email;
phone = Phone;

handleContactCreated(){

    const toastEvent = new ShowToastEvent({
        title: "Contatto creato",
        message: "Il contatto è stato creato correttamente",
        variant: "success"
    });
    this.dispatchEvent(toastEvent);
    this.handleReset();
}

handleReset() {
    // Get the form element
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
    }
 
}
}

