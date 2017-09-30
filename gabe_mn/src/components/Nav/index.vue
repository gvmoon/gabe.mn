<template>
	<nav role='nav'>
		<div class='nav-left'>
			<slot name='left'></slot>
		</div>
		<div class='nav-center'>
			<slot name='center'></slot>
		</div>
		<div class='nav-right'>
			<slot name='right'></slot>
		</div>
	</nav>
</template>

<style lang='scss'>
nav {
	display: inline-block;
	width: 100%;

	a {
		color: #FFFFFF;
		text-decoration: none;
	}

	& > div {
		float: left;
	}

	& > .nav-center{
		text-align: center;
		width: 50%;
	}

	& > .nav-left,
	& > .nav-right {
		width: 25%;
	}

	& > .nav-right {
		text-align: right;
	}
}
</style>

