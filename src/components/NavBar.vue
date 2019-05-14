<template>
    <!--Nav-->
    <b-navbar-nav >
        <b-navbar type="dark" variant="info">
            <b-navbar-brand>Syllabs</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item router-link to="/">Home</b-nav-item>
                    <b-nav-item router-link to="/about">About</b-nav-item>
                    <b-nav-item router-link to="/tableau">Tableau</b-nav-item>
                    <b-nav-item router-link to="/myaddresses">MyAddresses</b-nav-item>
                    <b-nav-item router-link to="/liste">Liste</b-nav-item>
                    <b-nav-item router-link to="/glisser">Glisser</b-nav-item>
                    <b-nav-item router-link :to="{ name: 'Sweeny' }">Sweeny</b-nav-item>
                    <b-nav-item router-link :to="{ name: 'Vfor' }">Vfor</b-nav-item>

                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">


                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>User</em></template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view/>

     </b-navbar-nav>
    <!--Nav-->

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">

</style>
