import axios from 'axios';
import City from '@/classes/City.js';
export const cityModule = {
    namespaced: true,
    state() {
        return {
            searchCity: '',
            weatherData: [],
        }
    },
    mutations: {
        SET_CITY(state, newCity) {
            state.searchCity = newCity;
        },
        PUSH_WEATHER_DATA(state, city) {
            state.weatherData.push(city);
        },
    },
       actions: {
        async fetchCityWeatherData({ state: { searchCity },commit }) {
            commit('common/CLEAR_ERROR','',{root: true})
            commit('common/SET_LOADING', true, {root: true})
            console.log(searchCity);
            axios.get('./weather.php', { params: { city: searchCity } })
                .then(res => {
                    let city = new City(res.data);
                    commit('PUSH_WEATHER_DATA', city);
                    commit('common/SET_LOADING', false, {root: true});
                })
                .catch(er => {
                    commit('common/SET_LOADING', false, {root: true})
                    commit('common/SET_ERROR', er.message, {root: true})
                    console.log(er);
                    console.log(er.message);
                })
                .finally(() =>{
                    commit('common/SET_LOADING', false, {root: true});
                })
        },
    }



}