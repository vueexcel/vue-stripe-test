import Vue from "vue";
import Vuex from "vuex";
import { auth, addNewUser, getUserByUid } from '../firebase'
import { createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetails: null
  },
  getters: {
    getUserDetails: (state)=>{
      return state.userDetails;
    }
  },
  mutations: {
    USER_DETAILS: (state, userCredential)=>{
      localStorage.setItem("userData", userCredential);
      state.userDetails = userCredential;
    }
  },
  actions: {
    async addNewUser({commit}, payload) {
      const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential.user;
      const userData = {
        name : payload.name,
        gender: payload.gender,
        dob: payload.dob,
        email: payload.email,
        uid: user.uid
      }
      const result = addNewUser(user.uid, userData);
      commit("USER_DETAILS", result);
      return result;
    },

    async loginUser({ commit } ,payload){
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
      const result = await getUserByUid(userCredential.user.uid);
      commit("USER_DETAILS", result);
      return result;  
    }
  },
  modules: {},
});
