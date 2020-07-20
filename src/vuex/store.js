import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        peoples: []
    },
    mutations: {
        SET_PEOPLE_TO_STATE: (state, people) => {
            state.people = people;
        }
    },
    actions: {
        GET_PEOPLE_FROM_API({ commit }) {
            return axios('https://swapi.dev/api/people/', {
                    method: "GET"
                })
                .then((people) => {
                    commit('SET_PEOPLE_TO_STATE', people.data)
                })
                .catch((error) => {
                    console.log(error);
                    return error
                })
        }
    },
    getters: {
        PEOPLE(state) {
            return state.people;
        }
    }
});

export default store;