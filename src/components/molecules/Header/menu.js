import React, { useContext } from 'react'
import { navLinks } from '@config'
import styles from './menu.module.scss'
import { GlobalStateContext } from '@context'

import { Hamburger } from '@components'

const Menu = () => {
	const state = useContext(GlobalStateContext)

	return (
		<div className={styles.contentMenu}>
			<Hamburger />
			{/* {state.isOpen && ( */}
			<nav
				className={
					state.isOpen ? `${styles.isOpen} + ${styles.navMenu}` : styles.navMenu
				}
			>
				{navLinks && (
					<ul className={styles.ulMenu}>
						{navLinks.map(({ name }) => (
							<li className={styles.liMenu} key={name}>
								{name}
							</li>
						))}
					</ul>
				)}
			</nav>
			{/* )} */}
		</div>
	)
}

export default Menu
