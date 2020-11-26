import React from 'react'

import { navLinks } from '@config'

import styles from './navigation.module.scss'

const Navigation = () => {
	return (
		<ul className={styles.list}>
			{navLinks.map(({ name }) => (
				<li key={name}>{name}</li>
			))}
		</ul>
	)
}

export default Navigation
