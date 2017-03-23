<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title><?= $title  ?></title>
        <base href="<?= $base  ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui">
        <link rel="stylesheet" type="text/css" href="css/reset.min.css">
        <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/TweenMax.js"></script>
        <script src="js/type.js"></script>
        <script src="js/script.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCWipWck4Dxj9tJHeFzYuDX4b3_ti4qGw"></script>
    </head>
    <body data-page="<?= $page  ?>" class="black">
        <nav class="menu">
            <ul>
                 <li class="menu-li"><a href="projects" data-page="projects" data-title="Dokframe-projects">Projects</a></li>
                 <li class="menu-li"><a href="about" data-page="about" data-title="Dokframe-about us">About us</a></li>
                 <li class="menu-li"><a href="contact" data-page="contact" data-title="Dokframe-contact us">Blog</a></li>
                 <li class="menu-li"><a href="contact" data-page="contact" data-title="Dokframe-contact us">Contact us</a></li>
            </ul>
        </nav>
        <section class="inner-ajax">