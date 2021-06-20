import ru from 'vuetify/lib/locale/ru';
import en from 'vuetify/lib/locale/en';
export default {
	// icons: { values: icons },
	theme: {
		dark: false,
		themes: {
			light: {
				primary: '#73FFDC',
				secondary: '#B8D7FF',
				error: '#FF737D',
				success: '#72FF72',
				warning: '#FFC573',
				bg: '#EAF3FF'
			},
			dark: {
				primary: '#73FFDC',
				secondary: '#B8D7FF',
				error: '#FF737D',
				success: '#72FF72',
				warning: '#FFC573',
				bg: '#EAF3FF'
			}
		}
	},
	lang: {
		locales: { ru, en },
		current: 'ru'
	}
};
