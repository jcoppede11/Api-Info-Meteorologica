$(() => {
    getWeather();
})

function getWeather() {
    const consultar = $('#consult');

    consultar.on('submit', (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('latitud', $('#lat').val().trim());
        formData.append('longitud', $('#lon').val().trim());
    
        // $.ajax({
        //     method: 'POST',
        //     url: '/api/sendConsult/' + idNote,
        //     data: formData,
        // })
    
    })


}
