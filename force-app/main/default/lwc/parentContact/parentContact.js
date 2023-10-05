import { LightningElement } from 'lwc';

export default class ContactManager extends LightningElement {

    handleContactCreated() {
        console.log('Contact created event caught in parent');
        
        // Trigger the refresh function inside elencoContatti
        this.template.querySelector('c-elenco-contatti').refreshData();
    }
}
