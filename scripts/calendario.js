const botonMes = document.querySelectorAll('.mesbtn');
const calendarEl = document.getElementById('calendario');

const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    // themeSystem: 'bootstrap5',
    initialDate: new Date(),
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    buttonText:{
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Dia'
    },
    events: [
        {
            title: 'Feriado',
            start: '2025-03-03',
            end: '2025-03-05', 
            description: 'Carnaval'
        },
        {
            title: 'Inicio 1ro',
            start: '2025-03-05',
            description: 'Inicio de clases para primer año'
        },
        {
            title: 'Inicio Clases',
            start: '2025-03-10',
            description: 'Inicio de clases para el resto de los cursos'
        },
    
    ],
    eventDidMount: function (info) {
        tippy(info.el, {
            content: info.event.extendedProps.description,
            placement: 'top',
            theme: 'light',
            trigger: 'mouseenter click'
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    activarBoton(new Date().getMonth()-1)
    calendar.render();

});

botonMes.forEach((cadaBoton, i) => {
    cadaBoton.addEventListener('click', () => {
        let month = String(i+1);
        let year = new Date().getFullYear();
        let date = new Date(year, month, 1);
        calendar.gotoDate(date);
        activarBoton(i);
    })
})

const activarBoton = (position) => {
    botonMes.forEach((cadaBoton) =>{
        cadaBoton.classList.remove ('activo')
    })
    botonMes[position].classList.add ('activo')
}