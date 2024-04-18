$(document).ready(function () {
    const Amenities_Dict = {};

    $("input[type='checkbox']").change(function(){
        const Amenity_id = $(this).attr("data-id");
        const Amenity_name = $(this).attr("data-name");

        if ($(this).is(':checked')) {
            Amenities_Dict[Amenity_id] = Amenity_name
        } else {
            delete Amenities_Dict[Amenity_id];
        }
        var amenitiesList = Object.values(Amenities_Dict).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});
