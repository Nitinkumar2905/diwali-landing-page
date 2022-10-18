$(window).ready(function(){
    console.log('ready')

    if($('#navbar').css('display') == 'none'){
        $('#hamburger').on('click', function(){
            $('#navbar').show()
            $('#hamburger').hide()
            $('#cross').show()
        })
    }
    else($('#navbar').css('display') =='block');{
        $('#cross').on('click', function(){
            $('#navbar').hide()
            $('#hamburger').show()
            $('#cross').hide()
        })
    }
})