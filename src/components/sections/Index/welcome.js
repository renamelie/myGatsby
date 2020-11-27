import React, { useRef, useEffect, useState } from 'react'
import styles from './welcome.module.scss'

import { BGImg } from '@components'

const Welcome = () => {
	const [hideBackground, setHideBackground] = useState(false)
	const sectionRef = useRef(null)
	const backRef = useRef(null)
	backRef.current = hideBackground

	useEffect(() => {
		let sectionHeight = sectionRef.current.offsetHeight

		const handleScroll = () => {
			const show = window.scrollY > sectionHeight / 2
			if (backRef.current !== show) {
				setHideBackground(show)
			}
		}

		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	console.log(hideBackground)
	// const sectionRef = useRef(null)

	// useEffect(() => {
	// 	let sectionHeight = sectionRef.current.offsetHeight
	// 	let sectionWidth = sectionRef.current.offsetWidth

	// 	console.log(sectionHeight, sectionWidth)
	// }, [sectionRef])

	return (
		<section
			className={styles.content}
			ref={sectionRef}
			style={{ opacity: hideBackground ? 0 : 1, transition: '1s ease' }}
		>
			<BGImg image="welcome2" alt="Image background" />
			<div className={styles.inner}>Welcome</div>
		</section>
	)
}

export default Welcome
