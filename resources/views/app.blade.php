<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="/favicon.webp">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://maps.google.com">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">

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
