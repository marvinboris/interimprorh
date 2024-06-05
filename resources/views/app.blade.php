<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Interim Pro RH</title>
    <meta name="description"
        content="Find your dream job today. At Interim Pro RH discover opportunities that match your skills and ambitions.">

    <!-- Scripts -->
    @viteReactRefresh
    @vite('resources/js/app.tsx')
</head>

<body class="font-sans antialiased">
    <div id="app">
    </div>
</body>

</html>
