var days = 0;
var vehPrice = 0;
var parm = 0;

function alterForm(first_name, last_name) {
    var expression = new RegExp(first_name, "i");
    $.getJSON('rentalclients.json', function (data) {
        $.each(data, function (key, value) {
            if (value.first_name == first_name) {
                $("#name").html(value.first_name + ' ' + value.last_name);
                $("#email").html(value.email);
                $("#phone").html(value.phone);
                $("#address").html(value.address);
                $("#state_prov").html(value.state_prov);
            }
        });
    });
}


$(function () {
    $('#displayForm').hide();
    $('.show').hide();
    $('.image').hide();
    
    $('#search').keyup(function () {

        $('#result').html('');
        $('#displayForm').hide();
        $('.show').hide();
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('rentalclients.json', function (data) {
            $.each(data, function (key, value) {
                if (value.last_name.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class"> ' + value.last_name + ' | <span class="text-muted">' + value.first_name + '</span></li>');
                }
            });
        });
    });



    $('#result').on('click', 'li', function () {
        $('.show').hide();
        var click_text = $(this).text().split(' | ');
        $('#search').val($.trim(click_text[0] + " " + click_text[1]));
        $("#result").html('');
        alterForm(click_text[1], click_text[0]);
        $('#displayForm').show();
    });

    $('#radio1').on('change', function () {
        if ($("#radio1").is(':checked')) {
        $(".image").hide();
        $('#image1').show();
    }
    });
    $('#radio2').on('change', function () {
        if ($("#radio2").is(':checked')) {
            $(".image").hide();
            $('#image2').show();
    }
    });
    $('#radio3').on('change', function () {
        if ($("#radio3").is(':checked')) {
            $(".image").hide();
            $('#image3').show();
    }
    });
    $('#radio4').on('change', function () {
            if ($("#radio4").is(':checked')) {
            $(".image").hide();
            $('#image4').show();
    }
    });


    $("#rent").on('click', function () {
        days = 0;
        vehPrice = 0;
        parm = 0;
        if ($("#radio1").is(':checked')) {
            vehPrice = 15;
        }
        if ($("#radio2").is(':checked')) {
            vehPrice = 20;
        }
        if ($("#radio3").is(':checked')) {
            vehPrice = 35;
        }
        if ($("#radio4").is(':checked')) {
            vehPrice = 40;
        }

        if ($('#mySwitch1').is(':checked')) {
            parm += 5;
        }

        if ($('#mySwitch2').is(':checked')) {
            parm += 5;
        }

        if ($('#mySwitch3').is(':checked')) {
            parm += 10;
        }

        var days = $("#noOfDays").val();

        var rent=days*parm + vehPrice;;
        $('#rentDetails').text(rent);
        
        //$('#displayForm').hide();
         $('.show').show();



    });
});
