<template>
	<div id="vue-wrap">
		<transition name="fade">
		    <router-view></router-view>
		</transition>
<header class="header-bar"></header>
		<div class="side-bar">
            <dl>
                <dt>
                    <router-link to="article" >
                        content
                    </router-link>
                </dt>
                <dt>
                    <a href="api/user">user</a>
                </dt>
                <dt>
                    <a href="login">login</a>
                </dt>
            </dl>
        </div>
	</div>
</template>