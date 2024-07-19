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
            start: '2024-07-09',
            description: 'Declaración de la Independencia en 1816'
        },
        {
            title: 'Feriado',
            start: '2024-08-17',
            description: 'Paso a la inmortalidad del Gral. Jose de San Martin'
        },
        {
            title: 'Feriado puente',
            start: '2024-10-11',
            description: 'Feriado con fines turisticos'
        },
        {
            title: 'Fecha Patria',
            start: '2024-10-12',
            description: 'Dia del respeto a la Diversidad Cultural'
        },
        {
            title: 'Feriado puente',
            start: '2024-11-18',
            description: 'Feriado con fines turisticos'
        },
        {
            title: 'Fecha Patria',
            start: '2024-11-20',
            description: 'Dia de la Soberania Nacional'
        },
        {
            title: 'Fecha Patria',
            start: '2024-12-8',
            description: 'Dia de la Virgen'
        },
        {
            title: 'Finalizacion de clases',
            start: '2024-12-20',
            description: 'Finalizacion de clases'
        },
        {
            title: 'Navidad',
            start: '2024-12-25',
            description: 'Conmemoracion del nacimiento del niño Jesus'
        },
        {
            title: 'Fin del ciclo lectivo',
            start: '2024-12-30',
            description: 'Fin del ciclo lectivo'
        }
    
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
    activarBoton (new Date().getMonth()-1);
    calendar.render();
});

botonMes.forEach((cadaBoton, i) => {
    botonMes[i].addEventListener('click', () => {
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