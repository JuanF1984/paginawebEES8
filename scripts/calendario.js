const botonMes = document.querySelectorAll('.mesbtn');
const calendarEl = document.getElementById('calendario');

const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    themeSystem: 'bootstrap5',
    initialDate: new Date(),
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
        {
            title: 'Día de la Independencia',
            start: '2024-07-09',
            description: 'Declaración de la Independencia en 1816'
        },
        {
            title: 'Evento 2',
            start: '2024-07-07',
            end: '2024-07-10',
            description: 'Descripción del Evento 2'
        },
        {
            title: 'Evento 3',
            start: '2024-07-09T16:00:00',
            description: 'Descripción del Evento 3'
        }
    ],
    eventDidMount: function (info) {
        tippy(info.el, {
            content: info.event.extendedProps.description,
            placement: 'top',
            theme: 'light'
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    calendar.render();
});

botonMes.forEach((cadaBoton, i) => {
    botonMes[i].addEventListener('click', () => {
        let month = String(i+1);
        let year = new Date().getFullYear();
        let date = new Date(year, month, 1);
        calendar.gotoDate(date);
    })
})