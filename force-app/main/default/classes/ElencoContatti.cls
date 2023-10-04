public with sharing class ElencoContatti {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        
        List<Contact> contatti = [SELECT Id, FirstName, LastName, Email, Phone, Account.Name FROM Contact WHERE AccountId != null];
        return contatti;
        
    }
}