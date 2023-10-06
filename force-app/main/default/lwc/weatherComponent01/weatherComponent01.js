import { LightningElement, track } from 'lwc';
import weatherControl from '@salesforce/apex/WeatherControl.weatherControl';


export default class WeatherComponent01 extends LightningElement {

@track weatherData;
@track country;

connectedCallback() {   
    this.fetchWeatherData();
}

fetchWeatherData() {
    weatherControl()
    .then (result => {
        if (result) {
            this.weatherData = JSON.parse(result);
            console.log('Weather data', this.weatherData);
            this.country = this.weatherData.sys.country;
            if (this.country === 'IT') {
                this.country = 'Italia';
            }
            this.weather = this.weatherData.weather[0].main;
            if (this.weather === 'Clouds') {
                this.weather = 'Nuvoloso';
            }
            //TO DO - parsare il dato
            
        }
    })
    .catch (error => {
        console.error('Error fetching weather data', error);
    });



}
















}