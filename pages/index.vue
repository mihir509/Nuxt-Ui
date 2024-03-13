<template>
    <div class="container mx-auto px-4 py-8">
        <section class="hero flex flex-col items-center gap-8 mb-16">
            <NuxtImg src="/assets/images/pexels-samarth-singhai-1010079.jpg" sizes="100vw sm:50vw md:400px" />
            <h1 class="text-4xl font-bold text-center text-primary">
                A powerful mobile application that helps you...
            </h1>
            <UButton>Download Now</UButton>
        </section>

        <section class="features">
            <h2 class="text-2xl font-semibold text-center mb-4">What You Can Do</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="feature rounded-lg shadow-md p-4">
                    <i class="fas fa-check-circle text-primary text-3xl mb-2"></i>
                    <h3>Feature 1</h3>
                    <p class="text-gray-700">Description of Feature 1</p>
                </div>
                <div class="feature rounded-lg shadow-md p-4">
                    <i class="fas fa-star text-primary text-3xl mb-2"></i>
                    <h3>Feature 2</h3>
                    <p class="text-gray-700">Description of Feature 2</p>
                </div>
                <div class="feature rounded-lg shadow-md p-4">
                    <i class="fas fa-check-circle text-primary text-3xl mb-2"></i>
                    <h3>Feature 3</h3>
                    <p class="text-gray-700">Description of Feature 3</p>
                </div>
                <div class="feature rounded-lg shadow-md p-4">
                    <i class="fas fa-star text-primary text-3xl mb-2"></i>
                    <h3>Feature 4</h3>
                    <p class="text-gray-700">Description of Feature 4</p>
                </div>
            </div>
        </section>
    </div>
</template>