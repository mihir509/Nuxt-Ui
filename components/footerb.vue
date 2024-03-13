<template>
    <div>
        <footer class="text-gray-500 dark:text-gray-400 py-4 flex justify-between items-center p-4">
            <p>©MIHIR 2024, All rights Reserved.</p>
            <div class="flex justify-between items-center">
                <div>
                    <UButton @click="onClick">
                        <ColorScheme placeholder="...">
                            <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="text-xl" />
                            <Icon v-else name="heroicons-outline:sun" class="text-xl" />
                        </ColorScheme>
                    </UButton>

                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>