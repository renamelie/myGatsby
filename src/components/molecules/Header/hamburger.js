import React, { useContext } from 'react'
import styles from './hamburger.module.scss'

import { GlobalStateContext, GlobalDispatchContext } from '@context'

const Hamburger = () => {
	const dispatch = useContext(GlobalDispatchContext)
	const state = useContext(GlobalStateContext)

	return (
		<button
			className={styles.headerBurger}
			onClick={() => {
				dispatch({ type: 'TOGGLE_OPEN' })
			}}
		>
			<span
				className={
					state.isOpen
						? `${styles.headerBurgerIcon} + ${styles.isOpen}`
						: styles.headerBurgerIcon
				}
			>
				<svg
					height="3"
					viewBox="0 0 27 3"
					width="27"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m0 7.96813127c3.44668862-.06669998 7.16392643-.85692 10.610615-.92361998 5.5533114-.10746714 10.8360736.50858575 16.389385.40111861"
						fill="none"
						stroke="#8cd9f4"
						strokeLinecap="round"
						transform="translate(0 -6)"
					></path>
				</svg>{' '}
				<svg
					height="3"
					viewBox="0 0 27 3"
					width="27"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m0 7.96813127c3.44668862-.06669998 7.16392643-.85692 10.610615-.92361998 5.5533114-.10746714 10.8360736.50858575 16.389385.40111861"
						fill="none"
						stroke="#8cd9f4"
						strokeLinecap="round"
						transform="translate(0 -6)"
					></path>
				</svg>{' '}
				<svg
					height="3"
					viewBox="0 0 27 3"
					width="27"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m0 7.96813127c3.44668862-.06669998 7.16392643-.85692 10.610615-.92361998 5.5533114-.10746714 10.8360736.50858575 16.389385.40111861"
						fill="none"
						stroke="#8cd9f4"
						strokeLinecap="round"
						transform="translate(0 -6)"
					></path>
				</svg>{' '}
			</span>
		</button>
	)
}

export default Hamburger
