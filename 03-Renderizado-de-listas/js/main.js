const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja' },
            { nombre: 'Aprender Vue y Firebase', prioridad: 'alta' },
            { nombre: 'Ir al gimnasio', prioridad: 'alta' },
        ],
        persona: {
            nombre: 'Pedro',
            profesion: 'dev',
            ciudad: 'Madrid'
        }
    }
})