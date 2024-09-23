<!-- 
INSTRUCTION: Summary: HTML file that describes a list of features.
INSTRUCTION: It contains a grid layout with 6 feature sections, each with an icon, a title, and a description.
INSTRUCTION: The feature sections are organised in a grid of two rows, each with three columns.
-->

<template>
    <!-- Features list -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <!-- Feature 1 -->
        <div id="feature-1" class="bg-slate-800 rounded-lg shadow-lg p-6">
            <div id="feature-1-header" class="flex items-center space-x-2 mb-3">
                <i class='bx bx-collection text-2xl text-purple-500'></i>
                <h4 id="feature-1-title" class="text-slate-50 font-medium text-lg">Diverse Sprite Collection</h4>
            </div>
            <p id="feature-1-description" class="text-sm text-slate-300">Explore a vast array of unique and captivating sprites for all your creative projects.</p>
        </div>

        <!-- Feature 2 -->
        <div id="feature-2" class="bg-slate-800 rounded-lg shadow-lg p-6">
            <div id="feature-2-header" class="flex items-center space-x-2 mb-3">
                <i class='bx bx-upload text-2xl text-purple-500'></i>
                <h4 id="feature-2-title" class="text-slate-50 font-medium text-lg">Easy Upload & Sell</h4>
            </div>
            <p id="feature-2-description" class="text-sm text-slate-300">Share your sprite creations with the world and earn from your artistic talent.</p>
        </div>

        <!-- Feature 3 -->
        <div id="feature-3" class="bg-slate-800 rounded-lg shadow-lg p-6">
            <div id="feature-3-header" class="flex items-center space-x-2 mb-3">
                <i class='bx bx-palette text-2xl text-purple-500'></i>
                <h4 id="feature-3-title" class="text-slate-50 font-medium text-lg">Customization Tools</h4>
            </div>
            <p id="feature-3-description" class="text-sm text-slate-300">Modify and personalize sprites to fit your specific needs with our built-in editor.</p>
        </div>

        <!-- Feature 4 -->
        <div id="feature-4" class="bg-slate-800 rounded-lg shadow-lg p-6">
            <div id="feature-4-header" class="flex items-center space-x-2 mb-3">
                <i class='bx bx-shield-quarter text-2xl text-purple-500'></i>
                <h4 id="feature-4-title" class="text-slate-50 font-medium text-lg">Secure Transactions</h4>
            </div>
            <p id="feature-4-description" class="text-sm text-slate-300">Buy and sell sprites with confidence using our safe and reliable payment system.</p>
        </div>

        <!-- Feature 5 -->
        <div id="feature-5" class="bg-slate-800 rounded-lg shadow-lg p-6">
            <div id="feature-5-header" class="flex items-center space-x-2 mb-3">
                <i class='bx bx-group text-2xl text-purple-500'></i>
                <h4 id="feature-5-title" class="text-slate-50 font-medium text-lg">Community Showcase</h4>
            </div>
            <p id="feature-5-description" class="text-sm text-slate-300">Get inspired by fellow artists and showcase your own sprite designs in our vibrant community.</p>
        </div>

        <!-- Feature 6 -->
        <div id="feature-6" class="bg-slate-800 rounded-lg shadow-lg p-6">
            <div id="feature-6-header" class="flex items-center space-x-2 mb-3">
                <i class='bx bx-plug text-2xl text-purple-500'></i>
                <h4 id="feature-6-title" class="text-slate-50 font-medium text-lg">Seamless Integration</h4>
            </div>
            <p id="feature-6-description" class="text-sm text-slate-300">Easily download and incorporate sprites into your games, apps, or design projects.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PurpleFeatureGridComponent",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>

</style>
