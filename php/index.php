<?php 
    //? * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
    //? * Aqui se ejecuta el codigo php que se necesite en el index * 
    //? * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

    echo '<div class="container-fluid mx-auto relative">';
        include('./layout/components/head.php');
        include('./layout/index/slash_text.php');
        include('./layout/components/header.php');
        include('./layout/index/slider.php');
        include('./layout/index/info_section.php');
        include('./layout/index/activities.php');
        include('./layout/index/services.php');
        include('./layout/index/partner_slider.php');
        include('./layout/components/footer.php');
        include('./layout/components/social_buttons.php');
    echo '</div>';
?>
