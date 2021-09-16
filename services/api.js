import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:3030'
})

export default api;

/*
 *iOS com Emulador: localhost 
 *iOS com físico: IP da máquina
 *Android com Emulador: localhost (adb reverse)

*/