<template>
	<nav role='nav'>
		<div class='gmn-nav-left'>
			<slot name='left'></slot>
		</div>
		<div class='gmn-nav-center'>
			<slot name='center'></slot>
		</div>
		<div class='gmn-nav-right'>
			<slot name='right'></slot>
		</div>
	</nav>
</template>

<style lang='scss'>
nav {
	display: inline-block;
	font-style: italic;
	width: 100%;

	a {
		color: #FFFFFF;
		text-decoration: none;
	}

	& > div {
		float: left;
	}

	& > .gmn-nav-center{
		text-align: center;
		width: 50%;
	}

	& > .gmn-nav-left,
	& > .gmn-nav-right {
		width: 25%;
	}

	& > .gmn-nav-right {
		text-align: right;
	}
}
</style>
