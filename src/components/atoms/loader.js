import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import styles from './loader.module.scss'

const LoaderSpin = () => {
	return (
		<div className={styles.loader}>
			<Loader
				type="ThreeDots"
				color="#00BFFF"
				height={100}
				width={100}
				// timeout={3000}
			/>
		</div>
	)
}

export default LoaderSpin
