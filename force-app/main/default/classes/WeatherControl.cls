public with sharing class WeatherControl {

    @AuraEnabled(cacheable=true)
    public static String weatherControl() {
        String apiKey = WeatherControl__c.getInstance().APIKey__c;
        String cityNation = 'Milano,it';
        System.debug(apiKey);
        String endPoint3 = 'https://api.openweathermap.org/data/2.5/weather?q='+cityNation+'&APPID='+apiKey;
        //make a callout
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endPoint3);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug(response);
        
        //parse the JSON response
        
        if (response.getStatusCode() == 200) {
            
            return response.getBody();
            
            
        } else {
            System.debug('Callout failed: ' + response);
            return null;
        }
    }
}