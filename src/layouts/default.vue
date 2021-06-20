<template>
	<v-app >
		<!-- left-menu -->
		<v-navigation-drawer
			v-model="drawer"
			:mini-variant="miniVariant"
			clipped
			fixed
			app
			color="primary"
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<!-- header -->
		<v-app-bar
			clipped-left
			fixed
			app			
		>
			<v-app-bar-nav-icon  @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
			<v-spacer />
			<v-btn
				icon
				@click.stop="rightDrawer = !rightDrawer"
			>
				<v-icon>mdi-cog</v-icon>
			</v-btn>
		</v-app-bar>
		<!-- content -->
		<v-main :style="`background: ${$vuetify.theme.themes.light.bg}`">
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
		<!-- right-menu (settings) -->
		<v-navigation-drawer
			v-model="rightDrawer"
			right
			temporary
			fixed
			color="primary"
			
		>
			<!-- <v-list>
				<v-list-item>
					<v-list-item-action>
						<v-icon light>
							mdi-repeat
						</v-icon>
					</v-list-item-action>
					<v-list-item-title>Switch drawer (click me)</v-list-item-title>
				</v-list-item>
			</v-list> -->
		</v-navigation-drawer>
		<v-footer
			absolute
			app
			color="primary"
		>
			<span>&copy; {{ new Date().getFullYear() }} by George Lubenets</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			rightDrawer: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/'
				}
			],
			miniVariant: false,
			title: 'notes-library'
		};
	}
};
</script>
