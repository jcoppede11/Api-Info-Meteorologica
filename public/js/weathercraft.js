$(() => {
    getWeather();
})

function getWeather() {
    const submitConsultar = $('#consultWeather');

    submitConsultar.on('submit', (event) => {
        event.preventDefault();

        let latitud = $('#latitud')
        let longitud = $('#longitud')

        const formData = new FormData();
        formData.append('lat', latitud.val().trim());
        formData.append('lon', longitud.val().trim());

        $.ajax({
            method: 'GET',
            url: '/weathercraft/api/getWeather',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
                const infoApi = $('#infoApi');
                infoApi.html(`Temperatura: ${data.main.temp}°C, Descripción: ${data.description}`);
            },
        })
    })
}
