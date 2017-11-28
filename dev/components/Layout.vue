<template lang="html">
    <div class='container' >
        <header>
            <slot name='header'></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer" text="hello"></slot>
        </footer>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
</style>
