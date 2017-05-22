<template>
    <div id="vue-wrap">
    
            <router-view></router-view>
        
        <header class="header-bar"></header>
        <div class="side-bar">
            <dl>
                <dt>
                    <router-link to="/article">
                        article
                    </router-link>
                </dt>
                <dt>
                    <router-link to="/user">
                        user
                    </router-link>
                </dt>
                <dt>
                    <a href="login">login</a>
                </dt>
            </dl>
        </div>
    </div>
</template>