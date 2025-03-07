<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white p-4">
            <h2 class="text-xl font-bold">Sidebar</h2>
        </aside>

        <div class="flex flex-col flex-1">
            <!-- Navbar -->
            <header class="bg-blue-600 text-white p-4">
                <h1 class="text-lg font-bold">Navbar</h1>
            </header>

            <!-- Content -->
            <main class="flex-1 p-6">
                <slot /> <!-- Ini akan digantikan oleh konten halaman -->
            </main>

            <!-- Footer -->
            <footer class="bg-gray-700 text-white p-4 text-center">
                Footer &copy; 2024
            </footer>
        </div>
    </div>
</template>