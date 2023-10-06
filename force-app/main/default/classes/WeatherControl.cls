public with sharing class WeatherControl {
    
    String lat = '45.46427';
    String lon = '9.18951';
    String part ='hourly,daily';
    String apiKey = WeatherControl__c.getOrgDefaults().APIKey__c;
    String apiKey2 = '60d1cf7a5505b0aac7015291099d53ee';
    String endPoint = 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&exclude='+part+'&appid='+apiKey;
    String endPoint2 = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apiKey;
    String endPoint3 = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID='+apiKey2;
    String endPoint4 = 'https://api.openweathermap.org/data/2.5/weather?q=Milano,it&APPID=60d1cf7a5505b0aac7015291099d53ee';
    
    public void weatherControl() {
        
        //make a callout
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endPoint3);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug(response);
        
        //parse the JSON response
        
        if (response.getStatusCode() == 200) {
            
            
            Map<String, Object> parsedMap = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            
            
        }
    }
}