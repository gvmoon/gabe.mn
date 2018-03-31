<template>
    <div class='gmn-not-found'>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-xs-12'>
                    <h1>
                        Sorry, Page Not Found
                    </h1>
                    <h2>
                        Please navigate to one of the pages below.
                    </h2>
                    <h3>
                        <router-link :to="{ name: 'home'}">Or go Home</router-link>
                    </h3>
                </div>
            </div>
        </div>
        <MainLinks class='h-height-auto'/>
    </div>
</template>

<style lang='scss'scoped>
@import '~@scss/variables.scss';

.gmn-not-found {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
    text-align: center;
    justify-content: center;
    height: 100%;

    h3 {
        text-decoration: underline;

        :hover {
            color: $secondaryColor;
        }
    }
}
</style>

<script>
import MainLinks from '@components/MainLinks';

export default {
    components: { MainLinks }
};
</script>
