import React from 'react'

const Social = () => {
	return (
		<div className='home__social'>
			<a
				href='https://www.instagram.com/1sr.z_?igsh=b3czM3R6d21nbXBo&utm_source=qr'
				className='home__social-icon'
				target='_blank'
			>
				<i className='uil uil-instagram '></i>
			</a>

			<a
				href='https://www.linkedin.com/in/sardor-zokirjonov-3b1900311/'
				className='home__social-icon'
				target='_blank'
			>
				<i className='uil uil-linkedin-alt '></i>
			</a>

			<a
				href='https://github.com/sardorSoftware'
				className='home__social-icon'
				target='_blank'
			>
				<i className='uil uil-github-alt'></i>
			</a>
		</div>
	)
}

export default Social
