const vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola mundo :D',
        nuevaTarea : null,
        tareas: [{ 
            titulo: 'Hacer la compra', 
            prioridad: false,
            antiguedad: 60
        },{ 
            titulo: 'Aprender Vue y Firebase',
            prioridad: true, 
            antiguedad: 13
        },{ 
            titulo: 'Ir al gimnasio',
            prioridad: true,
            antiguedad: 34
        }]
    },
    methods: {
        agregarTarea: function(){
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: true,
                antiguedad: 0
            });
            this.nuevaTarea = null;
        }
    },
    computed: {
        // Lo bueno de las computed properties es que si las variables no cambian, devuelven un valor cacheado
        // Se podría replicar como simple funcion (method), pero reevaluaría cada vez que es llamada.
        tareasPorAntiguedad(){
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad)
        },
        tareasConPrioridad(){
            return this.tareas.filter( (tarea) => tarea.prioridad );
        }
    }
})